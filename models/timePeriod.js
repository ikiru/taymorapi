export default (sequelize, DataTypes) => {
  const TimePeriod= sequelize.define('time_period', {

    txtTimePeriodName: {
      type: Sequelize.STRING,
      unique: true,
    }

  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
