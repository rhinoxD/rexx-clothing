import { takeEvery } from 'redux-saga/effects';

import { ShopActionTypes } from './shopTypes';

export function* fetchCollectionsAsync() {
  yield console.log('I am Fired!');
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
