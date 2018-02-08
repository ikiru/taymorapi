export default (sequelize, DataTypes) => {
  const RentalTimePeriod= sequelize.define('rental_time_period', {
  
    txtRentalTimePeriod: {
      type: Sequelize.STRING
    },
    intRentalTimePeriod: {
      type: Sequelize.INTEGER
    }
    
  })

  

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}

