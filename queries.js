const sql = require("postgres");

const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
// const { Device, DeviceTypeTree } = require('./types.js')


const QueryRoot = new GraphQLObjectType({
  name: 'Queries',
  description: 'All the queries for the schema',
  fields: {
    
  }
})