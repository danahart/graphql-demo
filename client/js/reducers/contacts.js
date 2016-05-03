import types from '../constants/ActionTypes';

const initialState = {
    contact: [],
    viewAddress: false,
    currentContact: null,
    currentAddress: {
        street: null,
        city: null,
        state: null,
        zip: null
    }
}

const contact = (state = initialState, action) => {
    switch (action.type) {

	    case types.REQUEST_ALL_CONTACTS:
            //console.log('REQUEST_ALL_CONTACTS: '+JSON.stringify(action.payload));
	        return Object.assign({}, state, {contact: action.payload.data.all});

        case types.REQUEST_ADDRESS:
            console.log('REQUEST_ADDRESS: '+JSON.stringify(action.payload));
    	    return Object.assign({}, state, {currentAddress: {
                street: action.payload.data.contact[0].street,
                city: action.payload.data.contact[0].city,
                state: action.payload.data.contact[0].state,
                zip: action.payload.data.contact[0].zip
                }
            });

        case types.SHOW_ADDRESS_VIEW:
            //console.log('SHOW_ADDRESS_VIEW: '+JSON.stringify(action.payload));
        	return Object.assign({}, state, {viewAddress: action.payload});

        case types.SET_CURRENT:
            //console.log('SET_CURRENT: '+JSON.stringify(action.payload));
            return Object.assign({}, state, {
                currentContact: action.payload.currentContact,
                viewAddress: action.payload.showAddress});

	    default:
	        return state;
    }
}
export default contact;
