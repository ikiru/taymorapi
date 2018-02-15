/*
    This table refereces the employees at each location and sets the level of access each employee has.

    Jeff Winkler 2/11/2018
*/

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
  Location.hasMany(this.Employees, {
    foreignKey: 'EmployeeID'
  })

  Role.hasMany(this.Employees, {
    foreignKey: 'EmployeeID'
  })

  SecurityLevel.hasMany(this.Employees, {
    foreignKey: 'EmployeeID'
  })
}

  return Employees
}



