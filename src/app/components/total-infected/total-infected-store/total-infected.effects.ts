import { HttpService } from './../../../services/http.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of, empty } from 'rxjs';
import {
  switchMap,
  map,
  withLatestFrom,
  mergeMap,
  catchError,
} from 'rxjs/operators';
import { IAppState } from './../../../store/app.state';
import {
  GetTotalInfected,
  TotalInfectedActionEnum,
  GetTotalInfectedSuccess,
} from './total-infected.actions';

@Injectable()
export class TotalInfectedEffects {
  totalInfected$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetTotalInfected>(TotalInfectedActionEnum.GetTotalInfected),
      mergeMap(() =>
        this._infectedService.getTotalInfectedData().pipe(
          map((data) => ({
            type: TotalInfectedActionEnum.GetTotalInfectedSuccess,
            payload: data.data,
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
