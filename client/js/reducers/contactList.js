import types from '../contstants/ActionTypes';//rename proper spelling!!!

const initialState = {
  "id": null,
  "name": null,
  "lastname": null,
  "address": null
};

export default function example(state = initialState, action) {
    switch (action.type) {

	    case types.RECEIVE_DATA:
	    	console.log('RECEIVE_DATA: '+ action.payload.results);
	        return Object.assign({}, state, {id: action.payload.id, name: action.payload.name});

	    default:
	        return state;
    }

}
