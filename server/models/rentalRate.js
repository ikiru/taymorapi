const RentalRate = sequelize.define('rental_rate', {
  rentalRateID: {
    type: Sequelize.BIGINT
  },
  intRentalRate: {
    type: Sequelize.INTEGER
  }
});