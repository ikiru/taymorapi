export default (sequelize, DataTypes) => {
  const Shows= sequelize.define('shows', {
  
    txtSecurityLevelName: {
      type: Sequelize.STRING
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
