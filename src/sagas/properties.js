import { call, put } from 'redux-saga/effects';

import { getProperties } from '../api'
import {
  getPropertiesSuccess,
  getPropertiesFailure
} from '../actions/properties'

export function* asyncGetPropertiesRequest() {
  try {
    const response = yield call(getProperties);
    yield put(getPropertiesSuccess(response));
  } catch (err) {
    yield put(getPropertiesFailure(err));
  }
}