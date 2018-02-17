'use strict';
module.exports = (sequelize, DataTypes) => {
  var RentalTypes = sequelize.define('RentalTypes', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RentalTypes;
};