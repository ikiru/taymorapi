const express = require('express');
const models = require('./models/model');
const expressGraphQL = require('express-graphql');
const postgraphql = require ('postgraphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();



// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;