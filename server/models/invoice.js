const Invoice = sequelize.define('invoice', {
  invoiceID: {
    type: Sequelize.BIGINT
  },
  dateCheckOut: {
    type: Sequelize.DATEONLY
  },
  dateCheckIn: {
    type: Sequelize.DATEONLY
  },
  intSubTotal: {
    type: Sequelize.INTEGER
  },
  intTax: {
    type: Sequelize.INTEGER
  },
  intTotal: {
    type: Sequelize.INTEGER
  },
  intCostume: {
    type: Sequelize.INTEGER
  },
  intDeposit: {
    type: Sequelize.INTEGER
  },

});