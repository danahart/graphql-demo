'use strict';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql/type';
import Contact from './contact';
import {Types} from 'mongoose';

let ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    _id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phone: {type: GraphQLString},
    street: {type: GraphQLString},
    city: {type: GraphQLString},
    state: {type: GraphQLString},
    zip: {type: GraphQLString},
    birthdate: {type: GraphQLString}
  }
});

let Mutations = ({
    updatePhone: {
      type: ContactType,
      args: {
          _id: {
          type: GraphQLID
        },
        phone: {
            type: GraphQLString
        }
      },
      resolve: (root, {_id, phone}) => {
          console.log('in mutations');
          return Contact.updateContactPhone(_id, phone);
      }
    }
});

let Queries = {
  address: {
    type: ContactType,
    args: {
        firstname: {
        type: GraphQLString
      }
    },
    name: 'address',
    description: 'address of contact',
    resolve: (root, {firstname}) => {
        console.log('in queries');
        return Contact.getContactAddressByName(firstname);
    }
  },
  contact: {
    type: new GraphQLList(ContactType),
    args: {
        firstname: {
        type: GraphQLString
      }
    },
    resolve: (root, {firstname}) => {
        return Contact.getContactByFirstname(firstname);
    }
  },
  all: {
      type: new GraphQLList(ContactType),
      resolve: (root, {}) => {
          return Contact.getAllContacts();
      }
  }

};

let RootMutation = new GraphQLObjectType({
  name: "RootMutation",

  fields: () => ({
    updatePhone: Mutations.updatePhone
  })
});

let RootQuery = new GraphQLObjectType({
  name: 'RootQuery',

  fields: () => ({
    contact: Queries.contact,
    address: Queries.address,
    all: Queries.all
  })
});

export let Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
