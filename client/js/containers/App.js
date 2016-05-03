import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactList from '../components/ContactList';
import * as actions from '../actions/actions';
import ActionTypes from '../constants/ActionTypes';

class App extends Component {

 componentDidMount() {
     var query = '{all{firstname, lastname, phone}}';
     this.props.fetchData(query, ActionTypes.REQUEST_ALL_CONTACTS);
 }

  render() {
      const contacts = this.props.contacts;
    return (
      <div class="row" id="contactList">
        <ContactList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
