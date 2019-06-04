import * as userApi from '../actions/user-api';

export function reducer(state = [], action: userApi.Actions): {} {
  switch (action.type) {

    case userApi.RECIEVE_USER:
      return action.payload;

    default:
      return state;

  }
}
