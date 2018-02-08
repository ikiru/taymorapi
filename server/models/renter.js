const Renter= sequelize.define('renter', {
  renterID: {
    type: Sequelize.BIGINT
  },
  txtBusinessName: {
    type: Sequelize.STRING
  },
  txtFName: {
    type: Sequelize.STRING
  },
  txtLName: {
    type: Sequelize.STRING
  },
  txtAddress: {
    type: Sequelize.STRING
  },
  txtCity: {
    type: Sequelize.STRING
  },
  txtState: {
    type: Sequelize.STRING
  },
  txtPhone: {
    type: Sequelize.STRING
  },
  txtEmail: {
    type: Sequelize.STRING
  },
  txtTaxID: {
    type: Sequelize.STRING
  },
});
