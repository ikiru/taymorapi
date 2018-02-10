export default (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
    dateCheckOut: {
      type: Sequelize.DATEONLY
    },
    dateCheckIn: {
      type: Sequelize.DATEONLY
    },
    intCostume: {
      type: Sequelize.INTEGER
    },
    intDeposit: {
      type: Sequelize.INTEGER
    },

  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
