export default (sequelize, DataTypes) => {
  const TaxRate= sequelize.define('tax_rate', {
   
    intTaxRate: {
      type: Sequelize.INTEGER
    }

  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
