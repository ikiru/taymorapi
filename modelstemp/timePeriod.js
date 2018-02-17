'use strict';
module.exports = (sequelize, DataTypes) => {
  var TimePeriod = sequelize.define('TimePeriod', {
    period: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TimePeriod;
};