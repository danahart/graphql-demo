import {combineReducers} from 'redux';
import contacts from './contactList';
import contactDetails from './addressCard';

const rootReducer = combineReducers({
  contacts,
  contactDetails
});

export default rootReducer;
