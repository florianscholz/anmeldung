import { Action, createAction } from '@ngrx/store';

export const loadedContacts = createAction('[REGISTRATIONS] Loaded Contacts');
export const loadContacts = createAction('[REGISTRATIONS] Load Contacts');
export const errorLoadContacts = createAction('[REGISTRATIONS] Error occured while loading contacts');