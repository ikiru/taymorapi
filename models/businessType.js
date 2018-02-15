'use strict';
module.exports = (sequelize, DataTypes) => {
  var BusinessType = sequelize.define('BusinessType', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BusinessType;
};