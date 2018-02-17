/*
    This table determines if the business is active or not. An example business that is not active would be one who has stopped using BetterOff Costumes.

    Jeff Winkler 2/11/2018
*/


module.exports = (sequelize, DataTypes) => {
  const ActiveLevel = sequelize.define('activeLevel', {

    name: {
      type: Sequelize.STRING,
      unique: true,
    }

  })

    ActiveLevel.associate = (models) => {
    // 1:N
       ActiveLevel.belongsTo(models.business, {
       foreignKey: 'ActiveLevelID'
     })
    }

  return ActiveLevel
}
