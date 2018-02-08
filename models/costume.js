export default (sequelize, DataTypes) => {
  const Costume = sequelize.define('costume', {
    txtCostumeName: {
      type: Sequelize.STRING
    },
    txtQRCode: {
      type: Sequelize.STRING
    },
    txtSize: {
      type: Sequelize.STRING
    },
    txtDescription: {
      type: Sequelize.TEXT
    },
    boolRental: {
      type: Sequelize.BOOLEAN
    },
    intPrimaryColor: {
      type: Sequelize.INTEGER
    },
    intSecondaryColor: {
      type: Sequelize.INTEGER
    },
    intRentalCost: {
      type: Sequelize.INTEGER
    },
    intTimePeriod: {
      type: Sequelize.INTEGER
    },
    intImage: {
      type: Sequelize.INTEGER
    },
    intMetaData: {
      type: Sequelize.INTEGER
    },
    intShows: {
      type: Sequelize.INTEGER
    },
    txtCostumeName: {
      type: Sequelize.STRING
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return User;
}
