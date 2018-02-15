'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransactionType = sequelize.define('TransactionType', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TransactionType;
};