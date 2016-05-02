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
               <div class="row">
                   <div class="large-8 columns">
                       <span>{address.street} {address.city}, {address.state} {address.zip}</span>
                  </div>
                  <div class="large-4 columns">
                    close
                  </div>
              </div>
          );

    }else {
        return null;
    }
  }
}
