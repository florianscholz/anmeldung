import { Action, createAction } from '@ngrx/store';

export const loadedFormScheme = createAction('[FORMS] Loaded Scheme');
export const loadFormScheme = createAction('[FORMS] Load Scheme');
export const errorLoadFormScheme = createAction('[FORMS] Error occured while loading scheme');