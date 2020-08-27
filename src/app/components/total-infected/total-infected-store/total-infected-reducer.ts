import { initialState } from './../../../../../../ngrx2/src/app/counter.reducer';
import * as Actions from './total-infected.actions';
import {
  initialTotalInfectedState,
  ITotalInfectedState,
} from './total-infected-state';
import { createReducer, on, State, Action } from '@ngrx/store';

const reducer = createReducer(
  initialTotalInfectedState,
  on(Actions.GetTotalInfectedSuccess, (state, { payload }) => ({
    ...state,
    totalInfected: payload,
  })),
  on(Actions.LocationChange, (state, { location }) => ({
    ...state,
    totalInfected: { ...state.totalInfected, location },
  }))
);
export function totalInfectedReducer(
  state: ITotalInfectedState | undefined,
  action: Action
) {
  return reducer(state, action);
}
