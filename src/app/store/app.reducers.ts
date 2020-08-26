import { totalInfectedReducer } from './../components/total-infected/total-infected-store/total-infected-reducer';
import { IAppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  totalInfected: totalInfectedReducer,
};
