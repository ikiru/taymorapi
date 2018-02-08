const Active_level = sequelize.define('active_level', {
  activeLevelId: {
    type: Sequelize.BIGINT
  },
  txtActiveLevelName: {
    type: Sequelize.STRING
  }
});
