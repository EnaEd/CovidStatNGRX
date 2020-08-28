import { createReducer, on, State, Action } from '@ngrx/store';
import {
  initialDetailState,
  IDetailInfectadState,
} from './detail-infected-state';
import * as ModuleActions from './detail-infected-action';

const reducer = createReducer(
  initialDetailState,
  on(ModuleActions.GetDetailActionSuccess, (state, { payload }) => ({
    ...state,
    detailInfected: payload,
  }))
);

export function detailInfectedReducer(
  state: IDetailInfectadState | undefined,
  action: Action
) {
  return reducer(state, action);
}
