const RentalTimePeriod= sequelize.define('rental_time_period', {
  rentalTimesID: {
    type: Sequelize.BIGINT
  },
  txtRentalTimePeriod: {
    type: Sequelize.STRING
  },
  intRentalTimePeriod: {
    type: Sequelize.INTEGER
  }
});