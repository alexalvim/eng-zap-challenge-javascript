import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE
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