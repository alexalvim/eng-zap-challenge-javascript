import { put } from 'redux-saga/effects';

import { GET_PROPERTIES_REQUEST } from '../../actions/actionTypes';
import { asyncGetPropertiesRequest } from '../../sagas/properties';
import {
  getPropertiesSuccess,
  getPropertiesFailure
} from '../../actions/properties';

describe('Test Properties Saga', () => {
  it('should success if get properties returns success', () => {
    const action = { type: GET_PROPERTIES_REQUEST };
    const mockedResult = { message: 'success' }
    const gen = asyncGetPropertiesRequest(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(getPropertiesSuccess(mockedResult)));
  });

  it('should failure if get properties returns error', () => {
    const action = { type: GET_PROPERTIES_REQUEST };
    const gen = asyncGetPropertiesRequest(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(getPropertiesFailure('error')));
  });
});