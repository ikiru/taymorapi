/*
  This refers the the how long a costume can be rented.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const RentalLength= sequelize.define('rentalLength', {
  
    name: {
      type: Sequelize.STRING
    },
    length: {
      type: Sequelize.INTEGER
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

