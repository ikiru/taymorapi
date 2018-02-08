export default (sequelize, DataTypes) => {
  const RentalRate = sequelize.define('rental_rate', {
   
    intRentalRate: {
      type: Sequelize.INTEGER
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
