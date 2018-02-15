/*
  This is the invoive table that will keep track of the costumes rented date checkout and date checked back in.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const Invoices= sequelize.define('invoice', {
  
    name: {
      type: Sequelize.STRING
    },
    dateCheckOut: {
      type: Sequelize.DATEONLY
    },
    dateCheckIn: {
      type: Sequelize.DATEONLY
    }
  })

  Invoices.associate = (models) => {
  // 1:N

      Business.belongsTo(models.Invoice, {
        foreignKey: 'BusinessID'
    })

      Renters.belongsTo(models.Invoice, {
        foreignKey: 'BusinessID'
    })

      RenterList.belongsTo(models.Invoice, {
        foreignKey: 'BusinessID'
    })
  } 

  return Shows
}
