import { IAppState } from './../../../store/app.state';
import { createSelector } from '@ngrx/store';
import { IDetailInfectadState } from './detail-infected-state';

const detailInfected = (state: IAppState) => state.detailInfected;

export const selectDetailInfected = createSelector(
  detailInfected,
  (state: IDetailInfectadState) => state.detailInfected
);
