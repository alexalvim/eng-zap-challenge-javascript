import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE
} from './actionTypes';

export const getPropertiesRequest = () => ({
   type: GET_PROPERTIES_REQUEST,
});

export const getPropertiesSuccess = () => ({
   type: GET_PROPERTIES_SUCCESS,
});

export const getPropertiesFailure = (payload) => ({
   type: GET_PROPERTIES_FAILURE,
   payload
});