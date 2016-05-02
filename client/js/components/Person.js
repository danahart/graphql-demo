import React, { Component, PropTypes } from 'react';

export default class Person extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {fname, lname} = this.props.fname;

    console.log('fname: '+fname+ ' lname: '+lname);
    if(fname && lname){
	       return(
            <div><span>{fname}</span><span>{lname}</span></div>
        );
    }else {
        console.log('in else ');
        return null;
    }
  }
}
