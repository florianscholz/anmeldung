import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlockTypes, FormBlock, FormInputBlockPayload, FormInputBlockType, FormScheme } from '@anmeldung/blocks';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { errorLoadFormScheme, loadedFormScheme, loadFormScheme } from 'src/app/actions/forms.action';
import { State } from 'src/app/app.module';
import { FormsEffects } from 'src/app/effects/forms.effects';
import { formScheme } from 'src/schema';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  readonly BLOCKTYPES = BlockTypes;
  scheme: FormScheme;
  onError$: Observable<never>;
  onSuccess$: Observable<{ type: string, scheme: FormScheme }>;
  myFormGroup: FormGroup;

  constructor(private store: Store<State>, private actionsSubject$: ActionsSubject) { }

  ngOnInit(): void {
    this.onError$ = this.actionsSubject$.pipe(ofType(errorLoadFormScheme.type), delay(500));
    this.onSuccess$ = this.actionsSubject$.pipe(ofType(loadedFormScheme), tap(action => {

      const data = ([] as FormBlock[]).concat(...action.scheme.sections.map(subarray => {
        return [].concat(...subarray.blocks);
      })).filter(obj => {
        return obj.type === FormInputBlockType
      }).map(block => block.payload) as FormInputBlockPayload[];

      const inputElements = data.reduce(
        (dict, el) => (dict[el.name] = new FormControl('leer'), dict),
        {}
      );
      
      this.myFormGroup = new FormGroup({...inputElements});


    }));
    this.store.dispatch({ type: loadFormScheme.type });

    this.onError$.subscribe(error => {
      console.log('Error: ', error);
    });
  }

  submit() {
    console.log(Object.entries(this.myFormGroup.controls)
    .map(elem => ({
      name: elem[0],
      value: elem[1].value
    })));
  }
}
