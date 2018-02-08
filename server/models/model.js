const Promise = require('bluebird');
const Sequelize = require('sequelize');
const cls = require('continuation-local-storage');
const ns = cls.createNamespace('transaction-namespace');
const clsBluebird = require('cls-bluebird');

/*
*
* Connectionscx
*
*/

clsBluebird(ns, Promise);
Sequelize.useCLS(ns);

const sequelize = new Sequelize('taymor', 'admin', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

/*
*
* Models
*
*
*/

Active_level.belongsTo(Business)
Business_Type.belongsTo(Business)
