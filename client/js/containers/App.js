import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Contacts from '../components/ContactList';
import * as actions from '../actions/actions';
import ActionTypes from '../contstants/ActionTypes'; //rename folder proper spelling!!!!

class App extends Component {

 componentDidMount() {
  var query = '{contact(id:"2"){name,address{phone}}}';
   this.props.fetchData(query, ActionTypes.REQUEST_DATA);
  }

  render() {

    return (
      <div className="row">
        <Contacts listing={this.props.state.contact}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.contacts //called out in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
