import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Contact } from '../models/registration.model';

export interface ContactState extends EntityState<Contact> {
}
export interface RegistrationsState {
    contacts: ContactState
}

export const adapterContacts: EntityAdapter<Contact> = createEntityAdapter({
    selectId: (refCol: Contact) => {
        return refCol.surname+'|'+refCol.name;
    }
});

export const initialContactsState  = adapterContacts.getInitialState();
export const initialRegistrationsState: RegistrationsState = {
    contacts: initialContactsState
}