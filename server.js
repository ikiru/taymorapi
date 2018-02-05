const express = require('express');
const expressGraphQL = require('express-graphql')
const schema = require('./schemas/schema')

const app = express()
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, ()  => {
  console.log('--------------------------------------------------')
  console.log('When you sleep, I can hear you when you scream!!!!');
  console.log('On port 4000');
  console.log('--------------------------------------------------')
});
