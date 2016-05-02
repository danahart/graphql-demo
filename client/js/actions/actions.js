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

export function fetchAllContacts(query, ACTION_TYPE) {
    return (dispatch) => {

        dispatch(requestData());
        console.log('fetchAllContacts');
        return fetch('http://localhost:3000/graphql?query='+query)
            .then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}

export function fetchAddressForContact(query, ACTION_TYPE) {
    return (dispatch) => {

        dispatch(requestData());

        return fetch('http://localhost:3000/graphql?query='+query)
            .then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}

export function fetchData(query, ACTION_TYPE) {
    return (dispatch) => {

        dispatch(requestData());

        return fetch('/graphql?query'+query)
            .then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}
