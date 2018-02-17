/*
  This table is a reference to the time period of the costumes.

  Jeff Winkler 2/18/2018
*/

module.exports = (sequelize, DataTypes) => {
  const TimePeriod= sequelize.define('timePeriod', {

    period: {
      type: Sequelize.STRING,
      unique: true,
    }

  })

  TimePeriod.associate = (models) => {
  // 1:N
     timePeriod.belongsTo(models.Costumes, {
     foreignKey: 'timePeriodID'
   })
  }
  

  return TimePeriod
}
