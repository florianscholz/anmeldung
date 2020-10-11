import { Component, OnInit } from '@angular/core';
import { BlockTypes, FormScheme } from '@anmeldung/blocks';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
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

  constructor(private store: Store<State>, private actionsSubject$: ActionsSubject) { }

  ngOnInit(): void {
    this.onError$ = this.actionsSubject$.pipe(ofType(errorLoadFormScheme.type), delay(500));
    this.onSuccess$ = this.actionsSubject$.pipe(ofType(loadedFormScheme), delay(500));
    this.store.dispatch({ type: loadFormScheme.type });

    this.onError$.subscribe(error => {
      console.log('Error: ', error);
    });
  }
}
