import { DetailInfectedModel } from './../../../models/detail-infected.model';
import { createAction, props } from '@ngrx/store';
export enum DetailInfectedActionEnum {
  GetDetail = '[Detail Infected] Get detail',
  GetDetailSuccess = '[Detail Infected] Get detail success',
  GetDetailError = '[Detail Infected] Get detail error',
}

export const GetDetailAction = createAction(
  DetailInfectedActionEnum.GetDetail,
  props<{ country: string }>()
);
export const GetDetailActionSuccess = createAction(
  DetailInfectedActionEnum.GetDetailSuccess,
  props<{ payload: DetailInfectedModel[] }>()
);
export const GetDetailActionError = createAction(
  DetailInfectedActionEnum.GetDetailError
);
