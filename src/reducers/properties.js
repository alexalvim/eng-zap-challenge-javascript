import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE
} from '../actions/actionTypes'
import { PROPERTIES_PER_PAGE, GROUPS } from '../variables'

export const initialState = {
  zapProperties: [],
  vivaProperties: [],
  activeGroup: GROUPS.ZAP,
  activeProperties: [],
  activePropertie: {},
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
      return {
        ...state,
        isLoading: false
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