export default (sequelize, DataTypes) => {
  const TaxExemptNumber= sequelize.define('tax_exempt_number', {
 
    txtTaxExemptNumber: {
      type: Sequelize.STRING
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
