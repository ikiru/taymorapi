/*
    This is the master list of Business signed up to use Betteroff Costumes.  The table references many other tables and is the main connection to invoices.

    Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
   
    name: {
      type: Sequelize.STRING
    },

  })
Business.associate = (models) => {
  // 1:N
    Business.belongsTo(models.invoice, {
      foreignKey: 'BusinessID'
    }),

    Business.belongsTo(models.Shared, {
      foreignKey: 'BusinessID'
    })

    Employees.hasMany(this.Business, {
      foreignKey: 'BusinessID'
    })

    BusinessType.hasMany(this.Business, {
      foreignKey: 'BusinessID'
    })

    Location.hasMany(this.Business, {
      foreignKey: 'BusinessID'
    })

    RentalLength.hasMany(this.Business, {
      foreignKey: 'BusinessID'
    })
  }

  return Business
}

