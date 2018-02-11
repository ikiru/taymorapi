export default (sequelize, DataTypes) => {
  const Shows= sequelize.define('shows', {
  
    name: {
      type: Sequelize.STRING
    }
  })

  Shows.associate = (models) => {
  // 1:N
     Shows.belongsTo(models.Costumes, {
     foreignKey: 'ShowID'
   })
  } 

  return Shows
}
