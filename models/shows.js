'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shows = sequelize.define('Shows', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shows;
};