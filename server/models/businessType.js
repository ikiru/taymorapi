const Business_Type = sequelize.define('busiuness_type', {
  businessTypeId: {
    type: Sequelize.BIGINT
  },
  txtBusinessType: {
    type: Sequelize.STRING
  }
});