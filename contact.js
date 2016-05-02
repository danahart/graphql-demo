import mongoose from 'mongoose';

let ContactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  firstname: {type: String},
  lastname: {type: String},
  phone: {type: String},
  address: [{
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String}
  }]
});

let Contact = mongoose.model('Contact', ContactSchema, 'contact');

ContactSchema.set('toJSON', {getters: true});

function getAllContacts() {
  return new Promise((resolve, reject) => {
    Contact.find({}).select('firstname lastname phone').exec((err,res) => {
        console.log(res);
        console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

function getContactByFirstname(name) {
  return new Promise((resolve, reject) => {
    Contact.find({firstname:name}).exec((err,res) => {
        console.log(res);
        console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

function getContactAddressByName(name) {
  return new Promise((resolve, reject) => {
    Contact.find({firstname:name}).select('address.street address.city, address.state address.zip').exec((err,res) => {
        console.log('getContactAddressByName '+JSON.stringify(res));
        console.log('err: '+err);
         err ? reject(err) : resolve(res);
    });
  });
}

exports.getAllContacts = getAllContacts;
exports.getContactByFirstname = getContactByFirstname;
exports.getContactAddressByName = getContactAddressByName;

exports.ContactSchema = Contact;
//export default Contact;
