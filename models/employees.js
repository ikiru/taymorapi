export default (sequelize, DataTypes) => {
  const Employees = sequelize.define('employess', {
 
    txtEmployeeFName: {
      type: Sequelize.STRING
    },
    txtEmployeeLName: {
      type: Sequelize.STRING
    },
    intRole: {
      type: Sequelize.INTEGER
    },
    intActivityLevel: {
      type: Sequelize.INTEGER
    },
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}



