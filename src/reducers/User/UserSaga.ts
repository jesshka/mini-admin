// Libraries
import { call, put, takeEvery } from 'redux-saga/effects'
// Services
import { getUsers } from '../../services/Services';

export enum UserActionsType {
  FETCH_USERS = 'users/FETCH_USERS',
  FETCH_USERS_SUCCEED = 'users/FETCH_USERS_SUCCEED',
  FETCH_USERS_ERROR = 'users/FETCH_USERS_ERROR',
}

function* fetchUsers() {
  try {
    const users: User[] = yield call(getUsers);
    yield put({ type: UserActionsType.FETCH_USERS_SUCCEED, value: users });
  }
  catch (e) {
    const data: User[] = [
      { firstName: 'Candy Octavia', lastName: 'Walters', gender: 'female', email: 'candy@yopmail.com' },
      { firstName: 'Owen', lastName: 'Love', gender: 'male', email: 'owen@yopmail.com' },
      { firstName: 'Otis Star', lastName: 'Cruz', gender: 'other', email: 'otis@yopmail.com' },
      { firstName: 'Lynda', lastName: 'Newton', gender: 'female', email: 'lynda@yopmail.com' },
      { firstName: 'Charissa', lastName: 'Wells', gender: 'female', email: 'charissa@yopmail.com' },
    ];

    yield put({ type: UserActionsType.FETCH_USERS_ERROR, value: data });
  }
}

export function* usersSaga() {
  yield takeEvery(UserActionsType.FETCH_USERS, fetchUsers);
}