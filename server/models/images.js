const Images = sequelize.define('images', {
  imageID: {
    type: Sequelize.BIGINT
  },
  txtImageName: {
    type: Sequelize.STRING
  }
});