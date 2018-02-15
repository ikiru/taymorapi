'use strict';
module.exports = (sequelize, DataTypes) => {
  var LocationType = sequelize.define('LocationType', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return LocationType;
};