import types from '../contstants/ActionTypes';//rename proper spelling!!!

const initialState = {
  "street": null,
  "city": null,
  "state": null,
  "zip": null,
  "phone": null
};

export default function example(state = initialState, action) {
    switch (action.type) {

	    case types.RECEIVE_DATA:
	    	console.log('RECEIVE_DATA: '+ action.payload.results);
	        return Object.assign({}, state, {state: action.payload.address.state, phone: action.payload.address.phone});

	    default:
	        return state;
    }

}
