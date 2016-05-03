import React, { Component, PropTypes } from 'react';
import * as actions from '../actions/actions';
import ActionTypes from '../constants/ActionTypes';

export default class AddressCard extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {address} = this.props;

    if(address){
	       return(
              <div className="row">
                  <div className="large-3 columns"></div>
                  <div className="large-5 columns">
                      {address.street} {address.city}, {address.state} {address.zip}
                 </div>
                 <div className="large-1 columns">
                     close
                 </div>
                 <div className="large-3 columns"></div>
             </div>
          );

    }else {
        return null;
    }
  }
}
