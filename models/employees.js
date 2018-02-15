'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employees = sequelize.define('Employees', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employees;
};