const RentalTerms= sequelize.define('rental_terms', {
  rentalTermsID: {
    type: Sequelize.BIGINT
  },
  intRentalTerms: {
    type: Sequelize.INTEGER
  }
});