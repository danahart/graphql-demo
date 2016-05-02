import types from '../constants/ActionTypes';

const initialState = {
    contact: []
}

const contact = (state = initialState, action) => {
    switch (action.type) {

	    case types.REQUEST_CONTACTS:
	    	//console.log('REQUEST_CONTACTS: '+ JSON.stringify(action.payload));
	        return Object.assign({}, state, {contact: action.payload.data.contact});

	    default:
	        return state;
    }
}
export default contact;
