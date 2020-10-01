import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { Contact } from './models/registration.model';
import { RegistrationsState } from './state/registrations.state';
import { loadedContacts } from './actions/registrations.action';
import { registrationsReducers } from './reducers/registration.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export interface State {
  registrations: RegistrationsState
};
export const reducers: ActionReducerMap<State> = {
  registrations: registrationsReducers
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
