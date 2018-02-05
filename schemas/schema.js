
const graphql = require('graphql');
const _ =require('lodash');

const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema 
} = graphql;

const owners =[
  {ownerID: 1,txtBusinessName: "bill",txtContactFName: "Jeff",txtContactLName: "winkler",txtPhone:"785-555-0000" ,txtEmail: 'adam@eve.net', txtAddress: "734 home", txtCity:'Dallas', txtState: "TX" ,activeLevelID: 0},
  {ownerID: 2,txtBusinessName: "joey",txtContactFName: "Jeff",txtContactLName: "winkler",txtPhone:"785-555-0000" ,txtEmail: 'adam@eve.net', txtAddress: "734 home", txtCity:'Dallas', txtState: "TX" ,activeLevelID: 1}
];

const activeLevel = [
  {activeLevelID:1, txtActiveLevelName: "Active"},
  {activeLevelID:2, txtActiveLevelName: "InactiveActive"},
  {activeLevelID:3, txtActiveLevelName: "Discontinued"}
]

const ActiveLevelType = new GraphQLObjectType({
  name: 'ActiveLevel',
  fields: {
    activeLevelID: { type: GraphQLInt },
    txtActiveLevelName: {type: GraphQLString }
  }
})

const OwnerType = new GraphQLObjectType({
  name:'Owner',
  fields:{
    ownerID:{type: GraphQLInt} ,
    txtBusinessName:{type: GraphQLString} ,
    txtContactFName: {type: GraphQLString},
    txtContactLName: {type: GraphQLString},
    txtPhone: {type: GraphQLString},
    txtEmail: {type: GraphQLString},
    txtAddress: {type: GraphQLString},
    txtCity: {type: GraphQLString},
    txtState: {type: GraphQLString},
    activeLevel: {
      type: ActiveLevelType,
      resolve(parentValue, args){
        return (activeLevel, {activeLevelID: parentValue.activeLevelID})
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    owner:{
      type: OwnerType,
      args: { ownerID: {type: GraphQLInt} },
      resolve(parentValue, args) {
        return _.find(owners, {ownerID: args.ownerID})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})

