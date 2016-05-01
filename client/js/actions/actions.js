import ActionTypes from '../contstants/ActionTypes'; //rename proper spelling!!!
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

export function fetchData(query, ACTION_TYPE) {
    return (dispatch) => {

        dispatch(requestData());

        return fetch('/graphql?query'+query,
            {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        }).then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
                .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}
