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
    _id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phone: {type: GraphQLString},
    address: {
        type: AddressType,
        description: "Address of contact or empty if they have none",
        resolve: (root, {firstname}) => {
            return Contact.getContactAddressByName(firstname);
        }
    }
  }
});

let Queries = {
  address: {
    type: AddressType,
    args: {
        firstname: {
        type: GraphQLString
      }
    },
    name: 'address',
    description: 'address of contact',
    resolve: (root, {firstname}) => {
        return Contact.getContactAddressByName(firstname);
    }
    /*resolve: (contact, params, source, fieldASTs) => {
        var projections = getProjection(fieldASTs);
        return Contact.find({firstname:params.firstname}, projections);
    }*/
  },
  contact: {
    type: new GraphQLList(ContactType),
    resolve: (root, {}) => {
        return Contact.getAllContacts();
    }
  }
};

let RootQuery = new GraphQLObjectType({
  name: 'RootQuery',      //Return this type of object

  fields: () => ({
    contact: Queries.contact,
    address: Queries.address
  })
});

export let Schema = new GraphQLSchema({
  query: RootQuery
});
/*
export let Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        contact: {
          type: new GraphQLList(ContactType),
          resolve: (root, {}) => {
              return Contact.getAllContacts();

                //return new Promise((resolve, reject) => {
                //    Contact.findOne({"firstname": firstname}).exec((err, res) => {
                //    console.log(res);
                //    console.log('err: '+err);
                //     err ? reject(err) : resolve(res);
                //    });
                //  });

              }
        }
      }
    })
});*/
