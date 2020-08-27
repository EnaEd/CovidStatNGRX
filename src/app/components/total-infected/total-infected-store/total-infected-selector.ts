import { ITotalInfectedState } from './total-infected-state';
import { IAppState } from './../../../store/app.state';
import { createSelector } from '@ngrx/store';

const totalInfected = (state: IAppState) => state.totalInfected;

export const selectTotalInfected = createSelector(
  totalInfected,
  (state: ITotalInfectedState) => state.totalInfected
);
