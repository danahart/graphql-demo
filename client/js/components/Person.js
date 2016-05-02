import React, { Component, PropTypes } from 'react';

export default class Person extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {fname, lname, phone} = this.props;

    if(fname && lname){
	       return(
               <div class="row">
                   <div class="large-6 columns">
                       {fname} {lname}
                  </div>
                  <div class="large-6 columns">
                    {phone}
                  </div>
              </div>
        );
    }else {
        return null;
    }
  }
}
