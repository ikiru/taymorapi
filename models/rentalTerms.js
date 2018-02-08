export default (sequelize, DataTypes) => {
  const RentalTerms= sequelize.define('rental_terms', {
    
    intRentalTerms: {
      type: Sequelize.INTEGER
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
