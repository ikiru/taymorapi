'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoices = sequelize.define('Invoices', {
    name: DataTypes.STRING,
    dateCheckedOut: DataTypes.DATEONLY,
    dateCheckedIn: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Invoices;
};