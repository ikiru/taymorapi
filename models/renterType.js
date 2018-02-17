/*
  This refers to the type of renters

  Jeff Winkler 
*/

module.exports = (sequelize, DataTypes) => {
  const RenterTypes= sequelize.define('renterTypes', {
  
    name: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  RenterTypes.associate = (models) => {
  // 1:N
     RenterTypes.belongsTo(models.Renters, {
     foreignKey: 'RenterTypeID'
   })
  } 

  return RenterTypes
}