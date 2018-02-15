/*
  Main Node.js file for GraphQL.  Links to GraphiQL.

  Jeff Winkler 2/13/2018
*/

var express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const QueryRoot = require('./graphql/queries.js');
const MutationRoot = require('./graphql/mutations.js');
// const { UnassignedDeviceInput, ContactInput } = require('./graphql/inputs.js')
// const cp = require("./db");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('taymor', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

})


// const schema = new GraphQLSchema({
//   types: [],
//   query: QueryRoot,
//   mutation: MutationRoot
// })

// const context = {
//   cp: cp
// }

var app = express();

app.use(bodyParser.json())

// Header middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, token, authCode');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
});

// The GraphQL endpoint
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
//   context: context
// }));

// GraphiQL, a visual editor for queries
// app.use('/graphiql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
//   context: context
// }));

app.listen(4000, () => {
  console.log('--------------------------------------------------')
  console.log('When you sleep, I can hear you when you scream!!!!')
  console.log('On port 4000')
  console.log('--------------------------------------------------')
  console.log('Running a GraphQL API server at localhost:4000/graphql. \nUse localhost:4000/graphiql to run queries')
});