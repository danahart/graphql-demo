import keyMirror from 'keymirror';

const ActionTypes = keyMirror({

  REQUEST_DATA: null,
  RECEIVE_DATA: null,
  RECEIVE_ERROR: null,
  REQUEST_CONTACTS: null,
  REQUEST_ADDRESS: null

});

export default ActionTypes;
