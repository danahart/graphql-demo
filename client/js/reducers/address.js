import types from '../constants/ActionTypes';

const initialState = {
  "firstname": null,
  "lastname": null,
  "street": null,
  "city": null,
  "state": null,
  "zip": null,
  "phone": null
};

export default function example(state = initialState, action) {
    switch (action.type) {

	    case types.RECEIVE_DATA:
	    	console.log('RECEIVE_DATA: '+ JSON.strinify(action.payload));
	        return Object.assign({}, state, {state: action.payload.address.state, phone: action.payload.address.phone});

	    default:
            //console.log('just returning state');
	        return state;
    }

}
