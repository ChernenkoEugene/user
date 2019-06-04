import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';

import { UserApiService } from '../shared/services/user-api.service';
import * as userApi from '../actions/user-api';



@Injectable()
export class UserApiEffects {

  @Effect()
  requestUser$: Observable<userApi.UserApiAction> = this.actions$
    .pipe(
      ofType(userApi.REQUEST_USER),
      switchMap(actions => this.userApiServ.getDefaultUser()
        .pipe(
          mergeMap(user => of(new userApi.RecieveUser(user))),
          catchError(err => {
            console.log('err', err);
            return of(new userApi.RequestFailed(err));
          })
        )
      )
    );

  constructor(
    private actions$: Actions,
    private userApiServ: UserApiService
  ) { }
}
