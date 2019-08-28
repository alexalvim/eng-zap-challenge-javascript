import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE
} from '../actions/actionTypes'
import {
  getZapProperties,
  getVivaProperties
} from '../helpers';
import { PROPERTIES_PER_PAGE, PORTALS } from '../variables'

export const initialState = {
  zapProperties: [],
  vivaProperties: [],
  activePortal: PORTALS.ZAP,
  activeProperties: [],
  activeProperty: {},
  listedPropertiePage: 1,
  errorMessage: '',
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_PROPERTIES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_PROPERTIES_SUCCESS:
      const vivaProperties = getVivaProperties(action.payload);
      const zapProperties = getZapProperties(action.payload);
      const activeProperties = zapProperties.splice(0, PROPERTIES_PER_PAGE);
      return {
        ...state,
        activePortals: PORTALS.ZAP,
        activeProperties,
        isLoading: false,
        vivaProperties,
        zapProperties
      }
    case GET_PROPERTIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};