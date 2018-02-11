export default (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', {
 
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
  })

Employees.associate = (models) => {
// 1:N
   Employees.belongsTo(models.Business, {
   foreignKey: 'EmployeeID'
 })
}

  return User
}



