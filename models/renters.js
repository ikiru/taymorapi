/*
  This is the list of the renters with there personal information.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const Renter= sequelize.define('renter', {
    Name: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    taxNumber: {
      type: Sequelize.STRING
    },
  })

  Renters.associate = (models) => {
  // 1:N
     renters.belongsTo(models.Invoice, {
     foreignKey: 'renters'
   })
  }

  return Renters
}


