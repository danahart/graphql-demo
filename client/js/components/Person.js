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

  showAddress(name, e){
      var query = '{contact(firstname: "'+name+'"){street, city, state, zip}}';
      this.props.fetchData(query, ActionTypes.REQUEST_ADDRESS);
      this.props.setCurrent({showAddress: true, currentContact: name}, ActionTypes.SET_CURRENT);
  }

  render() {

    const {contacts, viewAddress, currentAddress, fname, lname, phone} = this.props;

    if(fname && lname){
        let boundNameClick = this.showAddress.bind(this, fname);
        if(this.props.viewAddress && fname == this.props.currentContact){
	       return(
               <div>
               <div className="row">
                   <div className="large-2 columns"></div>
                   <div className="large-3 columns">
                       <span id={fname} onClick={boundNameClick}>{fname} {lname}</span>
                  </div>
                  <div className="large-3 columns">
                    {phone}
                  </div>
                  <div className="large-4 columns"></div>

              </div>
              <AddressCard address={this.props.currentAddress}/>
              </div>
          );
          }
          else{

              return(
                  <div className="row">
                      <div className="large-2 columns"></div>
                      <div className="large-3 columns">
                          <span id={fname} onClick={boundNameClick}>{fname} {lname}</span>
                     </div>
                     <div className="large-3 columns">
                       {phone}
                     </div>
                     <div className="large-4 columns"></div>
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
    contacts: state.contacts,
    viewAddress: state.contacts.viewAddress,
    currentAddress: state.contacts.currentAddress,
    currentContact: state.contacts.currentContact
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
