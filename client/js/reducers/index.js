import {combineReducers} from 'redux';
import contacts from './contacts';
import address from './address';

const rootReducer = combineReducers({
  contacts,
  address
});

export default rootReducer;
