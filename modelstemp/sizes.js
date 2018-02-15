/*
  Size of the costumes both men and women

  Jeff Winkler 
*/

export default (sequelize, DataTypes) => {
  const Sizes = sequelize.define('sizes', {
    
    sex: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.STRING
    }
  })

  sizes.associate = (models) => {
  // 1:N
    sizes.belongsTo(models.Costumes, {
     foreignKey: 'sizesID'
   })
  }

  return Sizes
}