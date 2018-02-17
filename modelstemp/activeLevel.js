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
  })
    ActiveLevel.associate = (models) => {
      // 1:N
        ActiveLevel.belongsTo(models.business, {
        foreignKey: 'ActiveLevelID'
      })
    }
  return ActiveLevel;
};