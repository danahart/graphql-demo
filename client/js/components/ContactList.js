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
    console.log('contacts: '+JSON.stringify(contacts.contact));
    /*console.log('props: '+JSON.stringify(this.props));
    console.log('props.state: '+JSON.stringify(this.props.state));
    console.log('.state: '+JSON.stringify(this.state));
    console.log('.contact: '+JSON.stringify(this.contact));
    console.log('.contacts: '+JSON.stringify(this.contacts));
    //console.log('contacts: '+JSON.stringify(contacts));
    //console.log('contact: '+JSON.stringify(contact));
    console.log('listing: '+JSON.stringify(listing));*/
	if (contacts.contact && contacts.contact.length > 0) {
        return (
            <div class="large-12 columns">
                {contacts.contact.map(function(person, i){
                    console.log('person: '+person.firstname);
                    <Person fname={person.firstname} lname={person.lastname} key={i}/>
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
    contacts: state.contacts //called out in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
