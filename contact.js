import mongoose from 'mongoose';

let ContactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  firstname: {type: String},
  lastname: {type: String},
  address: [{
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
    phone: {type: String}
  }]
});

let Contact = mongoose.model('Contact', ContactSchema, 'contact');

ContactSchema.set('toJSON', {getters: true});

function getAllContacts() {
  return new Promise((resolve, reject) => {
    Contact.find({}).select('firstname lastname address.phone').exec((err,res) => {
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

exports.getAllContacts = getAllContacts;
exports.getContactByFirstname = getContactByFirstname;

exports.ContactSchema = Contact;
//export default Contact;
