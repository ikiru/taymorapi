export default (sequelize, DataTypes) => {
  const RentalTimePeriod= sequelize.define('rentalTimePeriod', {
  
    timePeriodname: {
      type: Sequelize.STRING
    },
    timePeriodLength: {
      type: Sequelize.INTEGER
    }
    
  })

  RentalTimePeriod.associate = (models) => {
  // 1:N
     RentalTimePeriod.belongsTo(models.Business, {
     foreignKey: 'RentalTimePeriodID'
   })
  }

  return Business
}

