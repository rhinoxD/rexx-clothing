import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from '../user/userTypes';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
