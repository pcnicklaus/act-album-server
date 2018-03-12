import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import actReducer from './act_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  acts: actReducer,
});

export default rootReducer;
