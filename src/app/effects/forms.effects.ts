
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { errorLoadFormScheme, loadedFormScheme, loadFormScheme } from '../actions/forms.action';

@Injectable()
export class FormsEffects {

    loadSchemes$ = createEffect(() => this.actions$.pipe(
        ofType(loadFormScheme.type),
        mergeMap(() => this.http$.get(environment.endpoint)),
        map((data) => ({ type: loadedFormScheme.type, scheme: data }),
        ),
        catchError(() => of({ type: errorLoadFormScheme.type })
        )));

    constructor(
        private http$: HttpClient,
        private actions$: Actions
    ) { }
}