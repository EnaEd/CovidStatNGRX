import {
  IDetailInfectadState,
  initialDetailState,
} from './../components/detail-infected/detail-infected-store/detail-infected-state';
import { initialState } from './../../../../ngrx2/src/app/counter.reducer';
import { initialTotalInfectedState } from './../components/total-infected/total-infected-store/total-infected-state';
import { RouterReducerState } from '@ngrx/router-store';
import { ITotalInfectedState } from '../components/total-infected/total-infected-store/total-infected-state';

export interface IAppState {
  router?: RouterReducerState;
  totalInfected: ITotalInfectedState;
  detailInfected: IDetailInfectadState;
}
const _initialAppState = {
  totalInfected: initialTotalInfectedState,
  detailInfected: initialDetailState,
};

export function getInitalState(): IAppState {
  return _initialAppState;
}
