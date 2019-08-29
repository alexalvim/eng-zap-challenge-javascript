import {
  changeActivePortal,
  getPropertiesRequest,
  getPropertiesSuccess,
  getPropertiesFailure,
  seeMoreProperties,
  selectActiveProperty
} from '../../actions/properties';

import {
  CHANGE_ACTIVE_PORTAL,
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,
  SEE_MORE_PROPERTIES,
  SELECT_ACTIVE_PROPERTY
} from '../../actions/actionTypes';

describe('Test properties actions', () => {
  it('should create an action to change active portal', () => {
    const payload = 'zap'
    const expectedAction = {
      type: CHANGE_ACTIVE_PORTAL,
      payload
    }
    expect(changeActivePortal(payload)).toEqual(expectedAction);
  });

  it('should create an action to get properties request', () => {
    const expectedAction = {
      type: GET_PROPERTIES_REQUEST
    }
    expect(getPropertiesRequest()).toEqual(expectedAction);
  });

  it('should create an action to get properties success', () => {
    const payload = 'success';
    const expectedAction = {
      type: GET_PROPERTIES_SUCCESS,
      payload
    }
    expect(getPropertiesSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to get properties failure', () => {
    const payload = 'failure';
    const expectedAction = {
      type: GET_PROPERTIES_FAILURE,
      payload
    }
    expect(getPropertiesFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to see more properties', () => {
    const expectedAction = {
      type: SEE_MORE_PROPERTIES,
    }
    expect(seeMoreProperties()).toEqual(expectedAction);
  });

  it('should create an action to select active property', () => {
    const payload = 'zap';
    const expectedAction = {
      type: SELECT_ACTIVE_PROPERTY,
      payload
    }
    expect(selectActiveProperty(payload)).toEqual(expectedAction);
  });
})