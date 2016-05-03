import mongoose from 'mongoose';
//import Address from './Address';

let ContactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  firstname: {type: String},
  lastname: {type: String},
  phone: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  birthdate: {type: String}
});


let Contact = mongoose.model('Contact', ContactSchema, 'contact');

ContactSchema.set('toJSON', {getters: true});

function getAllContacts() {
  return new Promise((resolve, reject) => {
    Contact.find({}).exec((err,res) => {
        console.log('getAllContacts: '+res);
        console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

function getContactByFirstname(name) {
  return new Promise((resolve, reject) => {
    Contact.find({firstname:name}).exec((err,res) => {
        //console.log('getContactByFirstname: '+res);
        //console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

function getContactAddressByName(name) {
  return new Promise((resolve, reject) => {
    Contact.find({firstname:name}).exec((err,res) => {
        //console.log('getContactAddressByName '+JSON.stringify(res));
        //console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

function updateContactPhone(_id, phone) {
  return new Promise((resolve, reject) => {
    Contact.update({_id:_id}, {phone:phone}, function(err,res){
        console.log('updateContactPhone '+JSON.stringify(res));
        console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

exports.getAllContacts = getAllContacts;
exports.getContactByFirstname = getContactByFirstname;
exports.getContactAddressByName = getContactAddressByName;
exports.updateContactPhone = updateContactPhone;

exports.ContactSchema = Contact;
