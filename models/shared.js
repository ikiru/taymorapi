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