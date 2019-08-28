import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,
  CHANGE_ACTIVE_PORTAL
} from '../actions/actionTypes'
import {
  getZapProperties,
  getVivaProperties
} from '../helpers';
import { PROPERTIES_PER_PAGE, PORTALS } from '../variables'

export const initialState = {
  [PORTALS.ZAP]: [],
  [PORTALS.VIVA_REAL]: [],
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
      const zapProperties = getZapProperties(action.payload);
      return {
        ...state,
        activePortals: PORTALS.ZAP,
        activeProperties: zapProperties.slice(0, PROPERTIES_PER_PAGE),
        isLoading: false,
        [PORTALS.ZAP]: zapProperties,
        [PORTALS.VIVA_REAL]: getVivaProperties(action.payload)
      }
    case GET_PROPERTIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    case CHANGE_ACTIVE_PORTAL:
      return {
        ...state,
        activePortal: action.payload,
        activeProperties: state[action.payload].slice(0, PROPERTIES_PER_PAGE)
      }
    default:
      return state;
  }
};