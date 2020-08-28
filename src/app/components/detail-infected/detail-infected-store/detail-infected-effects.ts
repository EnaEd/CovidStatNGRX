import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from './../../../services/http.service';
import { Injectable } from '@angular/core';
import { IAppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import * as ModuleActions from './detail-infected-action';
import { empty } from 'rxjs';
import {
  switchMap,
  map,
  withLatestFrom,
  mergeMap,
  catchError,
  exhaustMap,
} from 'rxjs/operators';

@Injectable()
export class DetailInfectedEffects {
  detailInfected$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleActions.GetDetailAction),
      mergeMap((action) =>
        this._infectedService.getDetailInfected(action.country).pipe(
          map((data) => ({
            type: ModuleActions.DetailInfectedActionEnum.GetDetailSuccess,
            payload: data.data.covid19Stats,
          })),
          catchError(() => empty)
        )
      )
    )
  );
  constructor(
    private _infectedService: HttpService,
    private actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
