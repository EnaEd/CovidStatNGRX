import { initialState } from './../../../../ngrx2/src/app/counter.reducer';
import { initialTotalInfectedState } from './../components/total-infected/total-infected-store/total-infected-state';
import { RouterReducerState } from '@ngrx/router-store';
import { ITotalInfectedState } from '../components/total-infected/total-infected-store/total-infected-state';

export interface IAppState {
  router?: RouterReducerState;
  totalInfected: ITotalInfectedState;
}
const _initialAppState = {
  totalInfected: initialTotalInfectedState,
};

export function getInitalState(): IAppState {
  return _initialAppState;
}
