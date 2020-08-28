import { HttpService } from './../../../services/http.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { empty } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { IAppState } from './../../../store/app.state';
import {
  GetTotalInfected,
  TotalInfectedActionEnum,
  GetTotalInfectedSuccess,
} from './total-infected.actions';
import * as AppActions from './total-infected.actions';

@Injectable()
export class TotalInfectedEffects {
  totalInfected$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.GetTotalInfected),
      mergeMap((action) =>
        this._infectedService.getTotalInfectedData(action.countryName).pipe(
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
