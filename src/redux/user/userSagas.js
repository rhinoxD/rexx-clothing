import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './userTypes';

import { googleSignInSuccess, googleSignInFailure } from './userActions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
