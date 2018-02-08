export default (sequelize, DataTypes) => {
  const LocationType = sequelize.define('location_type', {
    intLocationType: {
      type: Sequelize.INTEGER
    }
  })

  
  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
