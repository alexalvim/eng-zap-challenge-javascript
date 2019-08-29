import propertiesReducer, { initialState } from '../../reducers/properties';

import { PORTALS, PROPERTIES_PER_PAGE } from '../../variables';
import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,
  CHANGE_ACTIVE_PORTAL,
  SEE_MORE_PROPERTIES,
  SELECT_ACTIVE_PROPERTY
} from '../../actions/actionTypes';
import {
  getZapProperties,
  getVivaProperties
} from '../../helpers';

const validSaleZapProperty = {
  pricingInfos: {
    price: '600000',
    businessType: 'SALE'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

const validSaleVivaProperty = {
  pricingInfos: {
    price: '700000',
    businessType: 'SALE'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

describe('Testing Properties reducer', () => {
  it('should return initial state', () => {
    expect(propertiesReducer(undefined, { type:'foo' })).toEqual(initialState);
  });

  it('should handle GET_PROPERTIES_REQUEST', () => {
    const action = {
      type: GET_PROPERTIES_REQUEST
    };
    const expectedValue = {
      ...initialState,
      isLoading: true
    };

    expect(
      propertiesReducer(undefined, action))
      .toEqual(expectedValue);
  });

  it('should handle GET_PROPERTIES_SUCCESS', () => {
    const payload = [validSaleVivaProperty, validSaleZapProperty];
    const zapProperties = getZapProperties(payload);
    const action = {
      type: GET_PROPERTIES_SUCCESS,
      payload
    };
    const expectedValue = {
      ...initialState,
      isLoading: false,
      activePortals: PORTALS.ZAP,
      activeProperties: zapProperties.slice(0, PROPERTIES_PER_PAGE),
      [PORTALS.ZAP]: zapProperties,
      [PORTALS.VIVA_REAL]: getVivaProperties(payload)
    };

    expect(
      propertiesReducer(undefined, action))
      .toEqual(expectedValue);
  });

  it('should handle GET_PROPERTIES_FAILURE', () => {
    const payload = 'error';
    const action = {
      type: GET_PROPERTIES_FAILURE,
      payload
    };
    const expectedValue = {
      ...initialState,
      isLoading: false,
      errorMessage: payload
    };

    expect(
      propertiesReducer(undefined, action))
      .toEqual(expectedValue);
  });

  it('should handle CHANGE_ACTIVE_PORTAL', () => {
    const payload = PORTALS.VIVA_REAL;
    const action = {
      type: CHANGE_ACTIVE_PORTAL,
      payload
    };
    const mockedState = {
      ...initialState,
      [PORTALS.VIVA_REAL]: [1, 2, 3]
    }
    const expectedValue = {
      ...mockedState,
      activePortal: PORTALS.VIVA_REAL,
      listedPropertiePage: 1,
      activeProperties: [1, 2, 3]
    };

    expect(
      propertiesReducer(mockedState, action))
      .toEqual(expectedValue);
  });

  it('should handle SEE_MORE_PROPERTIES', () => {
    const action = {
      type: SEE_MORE_PROPERTIES,
    };
    const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21];
    const mockedState = {
      ...initialState,
      activePortal: PORTALS.ZAP,
      [PORTALS.ZAP]: properties
    }
    const expectedValue = {
      ...mockedState,
      listedPropertiePage: 2,
      activeProperties: properties
    };

    expect(
      propertiesReducer(mockedState, action))
      .toEqual(expectedValue);
  });

  it('should handle SELECT_ACTIVE_PROPERTY', () => {
    const activeProperty = 'test';
    const action = {
      type: SELECT_ACTIVE_PROPERTY,
      payload: activeProperty
    };
    const expectedValue = {
      ...initialState,
      activeProperty
    };

    expect(
      propertiesReducer(undefined, action))
      .toEqual(expectedValue);
  });
});