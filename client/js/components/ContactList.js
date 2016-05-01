import React, { Component, PropTypes } from 'react';
export default class ContactList extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { listing } = this.props;
	if (listing && typeof listing !== 'undefined' && listing.length > 0) {
        return (
            <div class="large-12 columns">
                {listing.name}
            </div>
        );
	}
    else
    {
        return (<div></div>);
    }
  }

}
