
const graphql = require('graphql');
const _ =require('lodash');

const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema 
} = graphql;

const owners =[
  {ownerID: 1,txtBusinessName: 'bill',textContactFName: 'Jeff',textContactLName: 'winkler',textPhone:'785-555-0000' ,textEmail: 'adam@eve.net', textAddress: '734 home', textCity:'Dallas', textState: 'TX' ,intActiveOwner: 0},
  {ownerID: 2,txtBusinessName: 'joey',textContactFName: 'Jeff',textContactLName: 'winkler',textPhone:'785-555-0000' ,textEmail: 'adam@eve.net', textAddress: '734 home', textCity:'Dallas', textState: 'TX' ,intActiveOwner: 1}
];

const OwnerType = new GraphQLObjectType({
  name:'Owner',
  fields:{
    ownerID:{type: GraphQLInt} ,
    txtBusinessName:{type: GraphQLString} ,
    textContactFName: {type: GraphQLString},
    textContactLName: {type: GraphQLString},
    textPhone: {type: GraphQLString},
    textEmail: {type: GraphQLString},
    textAddress: {type: GraphQLString},
    textCity: {type: GraphQLString},
    textState: {type: GraphQLString},
    intActiveOwner: {type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    owner:{
      type: OwnerType,
      args: { ownerID: {type: GraphQLInt} },
      resolve(parentValue, args) {
        return _.find(owners , {ownerID: args.ownerID})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})

