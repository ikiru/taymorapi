export default (sequelize, DataTypes) => {
  const SecurityLevel= sequelize.define('security_level', {
    
    txtSecurityLevelName: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}

