'use strict';
module.exports = (sequelize, DataTypes) => {
  var Costumes = sequelize.define('Costumes', {
    name: DataTypes.STRING,
    qrCode: DataTypes.STRING,
    description: DataTypes.STRING,
    onlineRental: DataTypes.BOOLEAN,
    rentalPrice: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Costumes;
};