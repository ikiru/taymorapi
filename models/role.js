/*
  this refers to the role of the employ.  (i.e Owner, costumer)

  Jeff Winkler 
*/

export default (sequelize, DataTypes) => {
  const Role = sequelize.define('roles', {
    
    word: {
      type: Sequelize.STRING
    }
  })
    role.associate = (models) => {
  // 1:N
     role.belongsTo(models.Employees, {
     foreignKey: 'roleID'
   })
  }

  return Role
}
