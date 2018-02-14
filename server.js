/*
  Main Node.js file for GraphQL.  Links to GraphiQL.

  Jeff Winkler 2/13/2018
*/

import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';


const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>

  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql` )
)