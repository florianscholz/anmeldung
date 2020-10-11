import { createReducer } from '@ngrx/store';
import { on } from 'cluster';
import { loadedFormScheme } from '../actions/forms.action';
import { loadedContacts } from '../actions/registrations.action';
import { initialRegistrationsState } from '../state/registrations.state';

