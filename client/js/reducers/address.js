import types from '../constants/ActionTypes';

const initialState = {
  "street": null,
  "city": null,
  "state": null,
  "zip": null
};

export default function example(state = initialState, action) {
    switch (action.type) {

        case types.REQUEST_ADDRESS:
	    	console.log('REQUEST_ADDRESS: '+ JSON.stringify(action.payload));
	        return Object.assign({}, state,
                {
                    street: action.payload.data.address.street,
                    city: action.payload.data.address.city,
                    state: action.payload.data.address.state,
                    zip: action.payload.data.address.zip 
                });

	    default:
	        return state;
    }

}
