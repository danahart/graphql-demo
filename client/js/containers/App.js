import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactList from '../components/ContactList';
import * as actions from '../actions/actions';
import ActionTypes from '../constants/ActionTypes';

class App extends Component {

 componentDidMount() {
     var query = '{contact{firstname,lastname}}'; //address{phone}
     this.props.fetchAllContacts(query, ActionTypes.REQUEST_CONTACTS);
 }

  render() {
      const contacts = this.props.contacts;
    return (
      <div className="row">
        <ContactList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts //called out in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
