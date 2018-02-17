'use strict';
module.exports = (sequelize, DataTypes) => {
  var KeyWords = sequelize.define('KeyWords', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return KeyWords;
};