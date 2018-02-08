const Employees = sequelize.define('employess', {
  employeeID: {
    type: Sequelize.BIGINT
  },
  txtEmployeeFName: {
    type: Sequelize.STRING
  },
  txtEmployeeLName: {
    type: Sequelize.STRING
  },
  intRole: {
    type: Sequelize.INTEGER
  },
  intActivityLevel: {
    type: Sequelize.INTEGER
  },
});