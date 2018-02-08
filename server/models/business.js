const Business = sequelize.define('busiuness', {
  businessID: {
    type: Sequelize.BIGINT
  },
  txtBusinessName: {
    type: Sequelize.STRING
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  },
  intActiveLevel: {
    type: Sequelize.INTEGER
  },
  intBusinessType: {
    type: Sequelize.INTEGER
  },
  intLocation: {
    type: Sequelize.INTEGER
  },
  intTaxRate: {
    type: Sequelize.INTEGER
  },
  intTaxExempt: {
    type: Sequelize.INTEGER
  }
});