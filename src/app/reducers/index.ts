import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromApi from './user-api';

import { environment } from '../../environments/environment';

export interface State {
  user: {};
}

export const reducers: ActionReducerMap<State> = {
  user: fromApi.reducer,
};

export const getUserState = (state: State) => state.user;
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
