import keyMirror from 'keymirror';

const ActionTypes = keyMirror({

  REQUEST_DATA: null,
  RECEIVE_DATA: null,
  RECEIVE_ERROR: null,
  REQUEST_ALL_CONTACTS: null,
  REQUEST_ADDRESS: null,
  SHOW_ADDRESS_VIEW: null,
  SET_CURRENT: null

});

export default ActionTypes;
