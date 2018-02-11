export default (sequelize, DataTypes) => {
  const TimePeriod= sequelize.define('time_period', {

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
