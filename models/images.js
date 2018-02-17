/*
  This table refers to the images taken of the costumes.  

   Jeff Winkler 2/11/2018
*/

module.exports = (sequelize, DataTypes) => {
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

