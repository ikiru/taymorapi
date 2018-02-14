const sql = require("postgres");

const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
// const { Device, UnassignedDeviceInput, ResponseCode } = require('./types.js');
const QuerySPCreator = require('./querySPCreator.js');
const { Code1000, Code4000 } = require('./codes.js');

const MutationRoot = new GraphQLObjectType({
  name: 'Queries',
  description: 'All the queries for the schema',
  fields: {

  }
})