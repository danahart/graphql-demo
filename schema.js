'use strict';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList
} from 'graphql/type';
import Contact from './contact';
import {Types} from 'mongoose';

let AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    phone: { type: GraphQLString }
  }
});

let ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    _id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    address: {type: AddressType}
  }
});

export let Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        contact: {
          type: new GraphQLList(ContactType),
          // `args` describes the arguments that the `user` query accepts
          args: {
            firstname: { name:'firstname', type: GraphQLString }
          },
          resolve: (root, {firstname}) => {
              return Contact.getContactByFirstname(firstname);
/*
                return new Promise((resolve, reject) => {
                    Contact.findOne({"firstname": firstname}).exec((err, res) => {
                    console.log(res);
                    console.log('err: '+err);
                     err ? reject(err) : resolve(res);
                    });
                  });
*/
              }
        }
      }
    })
});
