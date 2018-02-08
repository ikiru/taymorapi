const Location = sequelize.define('location', {
  locationID: {
    type: Sequelize.BIGINT
  },
  txtLocationName: {
    type: Sequelize.STRING
  },
  txtLocationAddress: {
    type: Sequelize.STRING
  },
  txtLocationCity: {
    type: Sequelize.STRING
  },
  txtLocationState: {
    type: Sequelize.STRING
  },
  txtLocationZip: {
    type: Sequelize.STRING
  },
  txtLocationPhone: {
    type: Sequelize.STRING
  },
  txtLocationEmail: {
    type: Sequelize.STRING
  },
  intLocationType: {
    type: Sequelize.INTEGER
  },
  intEmployees: {
    type: Sequelize.INTEGER
  },
 
});