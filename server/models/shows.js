const Shows= sequelize.define('shows', {
  showID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});