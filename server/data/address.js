//////
// FILE NOT USED
/////

import mongoose from 'mongoose';
//import Contact from './Contact';

let AddressSchema = new mongoose.Schema({
    //user_id: {type: Number, ref:'Contact'},
    street: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String}
});


let Address = mongoose.model('Address', AddressSchema, 'address');

AddressSchema.set('toJSON', {getters: true});

function getAddressById (root, id){
  return new Promise((resolve, reject) => {
    Address.findOne({user_id:id}).exec((err, res) => {
    console.log('address res:+'+JSON.stringify(res));
      err ? reject(err) : resolve(res);
    })
  });
}

exports.getAddressById = getAddressById;

exports.AddressSchema = Address;
//export default Contact;
