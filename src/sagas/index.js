import { takeLatest } from 'redux-saga/effects';

import { GET_PROPERTIES_REQUEST } from '../actions/actionTypes';
import { asyncGetPropertiesRequest } from './properties'

export default function* root() {
  yield takeLatest(GET_PROPERTIES_REQUEST, asyncGetPropertiesRequest);
}