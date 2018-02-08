const TimePeriod= sequelize.define('time_period', {
  timePeriodID: {
    type: Sequelize.BIGINT
  },
  txtTimePeriodName: {
    type: Sequelize.STRING
  }
});