import { Action, createAction, props } from '@ngrx/store';
import { TotalInfectedModel } from '../../../models/total-infected.model';

export enum TotalInfectedActionEnum {
  LocationChange = '[Total Infected] Location change',
  GetTotalInfected = '[Total Infected] Get TotalInfected',
  GetTotalInfectedSuccess = '[Total Infected] Get TotalInfected Success ',
  GetTotalInfectedError = '[Total Infected] Get TotalInfected Error ',
}

export const LocationChange = createAction(
  TotalInfectedActionEnum.LocationChange,
  props<{ location: string }>()
);

export const GetTotalInfected = createAction(
  TotalInfectedActionEnum.GetTotalInfected,
  props<{ countryName: string }>()
);

export const GetTotalInfectedSuccess = createAction(
  TotalInfectedActionEnum.GetTotalInfectedSuccess,
  props<{ payload: TotalInfectedModel }>()
);

export const GetTotalInfectedError = createAction(
  TotalInfectedActionEnum.GetTotalInfectedError,
  props<{ payload: TotalInfectedModel }>()
);

// export type TotalInfectedActions =
//   | GetTotalInfected
//   | TotalInfectedSuccess
//   | GetTotalInfectedError;
