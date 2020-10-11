
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadedFormScheme, loadFormScheme } from '../actions/forms.action';

@Injectable()
export class FormsEffects {

    loadSchemes$ = createEffect(() => this.actions$.pipe(
        ofType(loadFormScheme.type),
        mergeMap(() => this.http$.get('http://localhost:3000/configuration/getFormScheme')),
    map(() => ({type: loadedFormScheme.type}))));

    constructor(
        private http$: HttpClient,
        private actions$: Actions
    ) { }
}