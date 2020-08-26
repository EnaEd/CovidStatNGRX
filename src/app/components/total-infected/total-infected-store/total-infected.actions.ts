import { Action } from '@ngrx/store';
import { TotalInfectedModel } from '../../../models/total-infected.model';

export enum TotalInfectedActionEnum {
  GetTotalInfected = '[Total Infected] Get TotalInfected',
  GetTotalInfectedSuccess = '[Total Infected] Get TotalInfected Success ',
  GetTotalInfectedError = '[Total Infected] Get TotalInfected Error ',
}
export class GetTotalInfected implements Action {
  public readonly type = TotalInfectedActionEnum.GetTotalInfected;
}
export class GetTotalInfectedSuccess implements Action {
  public readonly type = TotalInfectedActionEnum.GetTotalInfectedSuccess;
  constructor(public payload: TotalInfectedModel) {}
}

export class GetTotalInfectedError implements Action {
  public readonly type = TotalInfectedActionEnum.GetTotalInfectedError;
  constructor(public payload: TotalInfectedModel) {}
}

export type TotalInfectedActions =
  | GetTotalInfected
  | GetTotalInfectedSuccess
  | GetTotalInfectedError;
