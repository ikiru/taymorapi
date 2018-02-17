'use strict';
module.exports = (sequelize, DataTypes) => {
  var RentalList = sequelize.define('RentalList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RentalList;
};