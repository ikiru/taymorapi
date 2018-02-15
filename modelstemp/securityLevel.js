/*
  This will control the access that a employee will have to the application.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const SecurityLevel= sequelize.define('security_level', {
    
    name: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

    SecurityLevel.associate = (models) => {
    // 1:N
       SecurityLevel.belongsTo(models.Employees, {
       foreignKey: 'SecurityLevelID'
     })
    }

  return SecurityLevel
}

