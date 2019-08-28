import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,
  CHANGE_ACTIVE_PORTAL,
  SEE_MORE_PROPERTIES
} from './actionTypes';

export const getPropertiesRequest = () => ({
   type: GET_PROPERTIES_REQUEST,
});

export const getPropertiesSuccess = (payload) => ({
   type: GET_PROPERTIES_SUCCESS,
   payload
});

export const getPropertiesFailure = (payload) => ({
   type: GET_PROPERTIES_FAILURE,
   payload
});

export const changeActivePortal = (payload) => ({
   type: CHANGE_ACTIVE_PORTAL,
   payload
});

export const seeMoreProperties = () => ({
   type: SEE_MORE_PROPERTIES
});