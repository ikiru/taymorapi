import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'grapql-tools'

import typedefs from './schema'
import resolvers from './resolvers'
import models from './models'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express();

const graphqlEndpoint = '/graphql'

app.use(graphqlEndpoint, bodyparser.json(), graphqlExpress({  schema}))

app.use('/graphiql', graphiqlExpress({enpointURL: graphqlEndpoint }))

app.listen(4000, () => {
  console.log('--------------------------------------------------')
  console.log('When you sleep, I can hear you when you scream!!!!');
  console.log('On port 4000');
  console.log('--------------------------------------------------')
});
