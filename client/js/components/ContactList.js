import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Person from './Person';

export default class ContactList extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { contacts } = this.props;
	if (contacts.contact && contacts.contact.length > 0) {
        return (
            <div className="large-12 columns" id="contact-container">
                {contacts.contact.map(function(person, i){
                    return <Person fname={person.firstname}
                                    lname={person.lastname}
                                    phone={person.phone}
                                    key={i}
                            />;
                })}
            </div>
        );
	}
    else
    {
        return null;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
