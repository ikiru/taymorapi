const SecurityLevel= sequelize.define('security_level', {
  SecurityLevelID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});