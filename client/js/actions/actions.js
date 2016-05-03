import ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function requestData() {
    return {
        type: ActionTypes.REQUEST_DATA,
        payload: null
    };
}

function receiveData(data, ACTION_TYPE) {
    var x = {};
    console.log('receiveData'+JSON.stringify(data));
    if(data && data.errorMessage) {
        return {
            type: ActionTypes.RECEIVE_ERROR,
            payload: data
        }
    }

    return {
        type: ACTION_TYPE,
        payload: data
    };
}


function receiveError(err, ACTION_TYPE) {
    console.log('error: ' + err);

    return {
        type: ACTION_TYPE,
        payload: err,
        error: true
    };
}

export function setCurrent(payload, ACTION_TYPE){
    return{
        type: ACTION_TYPE,
        payload: payload
    }
}

export function fetchData(query, ACTION_TYPE) {
    return (dispatch) => {

        dispatch(requestData());

        return fetch('http://localhost:3000/graphql?query='+query)
            .then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}
