import { Component, OnInit } from '@angular/core';
import { BlockTypes } from '@anmeldung/blocks';
import { Store } from '@ngrx/store';
import { loadFormScheme } from 'src/app/actions/forms.action';
import { State } from 'src/app/app.module';
import { formScheme } from 'src/schema';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  readonly BLOCKTYPES = BlockTypes;
  scheme = formScheme;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch({type: loadFormScheme.type });
  }

}
