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

export function getProjection (fieldASTs) {
  return fieldASTs.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;

    return projections;
  }, {});
}

let AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString }
  }
});

let ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    _id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phone: {type: GraphQLString},
    address: {
        type: AddressType,
        description: "Address of contact or empty if they have none",
        resolve: (contact, params, source, fieldASTs) => {
            var projections = getProjection(fieldASTs);
            return Contact.find({_id:contact._id}, projections);
        }
    }
  }
});

export let Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        contact: {
          type: new GraphQLList(ContactType),
          resolve: (root, {}) => {
              return Contact.getAllContacts();
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
