/*
  This table references a list of broadway shows.  Hopefully in the futre it can refernce an api with a list of the shows.

  Jeff Winkler 2/11/2018
*/

module.exports = (sequelize, DataTypes) => {
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
