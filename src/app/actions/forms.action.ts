import { FormScheme } from '@anmeldung/blocks';
import { Action, createAction, props } from '@ngrx/store';

export const loadedFormScheme = createAction('[FORMS] Loaded Scheme',
props<{ scheme: any }>()
);
export const loadFormScheme = createAction('[FORMS] Load Scheme');
export const errorLoadFormScheme = createAction('[FORMS] Error occured while loading scheme');