'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActiveLevel = sequelize.define('ActiveLevel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ActiveLevel;
};