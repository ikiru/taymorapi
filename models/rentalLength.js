/*
  This refers the the how long a costume can be rented.

  Jeff Winkler 2/11/2018
*/

module.exports = (sequelize, DataTypes) => {
  const RentalLength= sequelize.define('rentalLength', {
  
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    length: {
      type: Sequelize.INTEGER,
      unique: true,
    }
    
  })

  RentalTimePeriod.associate = (models) => {
  // 1:N

    RentalLength.belongsTo(models.Business, {
      foreignKey: 'RentalLengthID'
   })

  }

  return Business
}

