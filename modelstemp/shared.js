/*
  This is the reference table for the business to share there inventory with another business.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const Shared= sequelize.define('shared', {
  
    
  })

  Shared.associate = (models) => {
  // 1:N
     Shared.belongsTo(models.Business, {
     foreignKey: 'SharedID'
   })
  } 

  return Shared
}