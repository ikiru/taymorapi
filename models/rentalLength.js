'use strict';
module.exports = (sequelize, DataTypes) => {
  var RentalLength = sequelize.define('RentalLength', {
    name: DataTypes.STRING,
    length: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RentalLength;
};