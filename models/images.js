export default (sequelize, DataTypes) => {
  const Images = sequelize.define('images', {

    txtImageName: {
      type: Sequelize.STRING
    }
  })
  
  Images.associate = (models) => {
  // 1:N
     Images.belongsTo(models.Costumes, {
     foreignKey: 'ImagesID'
   })
  }

  return Images
}

