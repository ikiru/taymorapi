export default (sequelize, DataTypes) => {
  const Images = sequelize.define('images', {

    name: {
      type: Sequelize.STRING
    }
  })
  
  Images.associate = (models) => {
  // 1:N
     Images.belongsTo(models.Costumes, {
     foreignKey: 'imageID'
   })
  }

  return Images
}

