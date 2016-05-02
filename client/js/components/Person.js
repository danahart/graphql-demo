import React, { Component, PropTypes } from 'react';
import * as actions from '../actions/actions';
import ActionTypes from '../constants/ActionTypes';
import AddressCard from './AddressCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Person extends Component {

  constructor(props, context) {
    super(props, context);
  }

  viewAddress(name, e){
      console.log('name: '+name.value);
      var query = '{address(firstname: "'+name+'"){street, city, state, zip}}'; //address{phone}
      this.props.fetchAddressForContact(query, ActionTypes.REQUEST_ADDRESS);
  }

  render() {

    const {fname, lname, phone, address} = this.props;

    if(fname && lname){
        if(address){
            let boundNameClick = this.viewAddress.bind(this, fname);
	       return(
               <div>
               <div class="row">
                   <div class="large-6 columns">
                       <span id={fname} onClick={boundNameClick}>{fname} {lname}</span>
                  </div>
                  <div class="large-6 columns">
                    {phone}
                  </div>
              </div>
              <AddressCard address={address}/>
              </div>
          );
          }
          else{
              return(
                  <div class="row">
                      <div class="large-6 columns">
                          <span id={fname} onClick={this.viewAddress.bind(this)}>{fname} {lname}</span>
                     </div>
                     <div class="large-6 columns">
                       {phone}
                     </div>
                 </div>
             );
          }
    }else {
        return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
