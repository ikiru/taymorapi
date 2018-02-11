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

Employees.associate = (models) => {
// 1:N
   Employees.belongsTo(models.Business, {
   foreignKey: 'EmployeesID'
 })
}

  return User
}



