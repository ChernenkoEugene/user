import { Action } from '@ngrx/store';

export const REQUEST_USER = '[Db] Request user';
export const RECIEVE_USER = '[Db] Recieve user';
export const REQUEST_FAILED = '[Db] Request failed';

export interface UserApiAction extends Action {
  payload?: any;
}

export class RequestUser implements UserApiAction {
  readonly type = REQUEST_USER;
}

export class RecieveUser implements UserApiAction {
  readonly type = RECIEVE_USER;

  constructor(public payload: {}) { }
}

export class RequestFailed implements UserApiAction {
  readonly type = REQUEST_FAILED;

  constructor(public error: any) { }
}

export type Actions =
  | RequestUser
  | RecieveUser
  | RequestFailed;
