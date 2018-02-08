export default (sequelize, DataTypes) => {
  const RentalDistance = sequelize.define(business,{

    intRentalDistance: {
      type: Sequelize.INTEGER
    }
    })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}

