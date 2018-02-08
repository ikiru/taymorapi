export default (sequelize, DataTypes) => {
  const Images = sequelize.define('images', {

    txtImageName: {
      type: Sequelize.STRING
    }
  })

  

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}

