import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadedContacts } from './actions/registrations.action';
import { State } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'buendisch-anmeldung';
  constructor(private store: Store<State>) {
    
  }
  ngOnInit(): void {
    this.store.dispatch(loadedContacts());
  }
}
