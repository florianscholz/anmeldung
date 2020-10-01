import {adapterContacts, initialContactsState, initialRegistrationsState, RegistrationsState} from '../state/registrations.state';
import { createReducer, on } from '@ngrx/store';
import { loadedContacts } from '../actions/registrations.action';


export const registrationsReducers = createReducer(
    initialRegistrationsState,
    on(loadedContacts, state => {
        console.log('action called');
        return {...state, contacts: adapterContacts.getInitialState()};
    })
)