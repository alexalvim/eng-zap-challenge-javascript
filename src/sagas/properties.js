import { call, put } from 'redux-saga/effects';

import {
  getPropertiesRequest,
  getPropertiesSuccess,
  getPropertiesFailure
} from '../actions/properties'

export function* asyncGetPropertiesRequest(action) {
  try {
    const response = yield call(getPropertiesRequest);
    yield put(getPropertiesSuccess(response));
  } catch (err) {
    yield put(getPropertiesFailure(err));
  }
}