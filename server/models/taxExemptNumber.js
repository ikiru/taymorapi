const TaxExemptNumber= sequelize.define('tax_exempt_number', {
  taxExemptID: {
    type: Sequelize.BIGINT
  },
  txtTaxExemptNumber: {
    type: Sequelize.STRING
  }
});