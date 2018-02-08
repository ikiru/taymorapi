const LocationType = sequelize.define('location_type', {
  locationTypeID: {
    type: Sequelize.BIGINT
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  }
});