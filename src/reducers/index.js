import { combineReducers } from 'redux';
import propertiesReducer from './properties';

export default combineReducers({
  propertiesState: propertiesReducer
});