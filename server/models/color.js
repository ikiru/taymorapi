const Color = sequelize.define('color', {
  colorID: {
    type: Sequelize.BIGINT
  },
  txtColorName: {
    type: Sequelize.STRING
  }
});