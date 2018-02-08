const TaxRate= sequelize.define('tax_rate', {
  taxRateID: {
    type: Sequelize.BIGINT
  },
  intTaxRate: {
    type: Sequelize.INTEGER
  }
});