'use strict';
module.exports = (sequelize, DataTypes) => {
  var SecurityLevel = sequelize.define('SecurityLevel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SecurityLevel;
};