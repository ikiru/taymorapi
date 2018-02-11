
export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
   
    BusinessName: {
      type: Sequelize.STRING
    },

  })
Business.associate = (models) => {
  // 1:N
    Business.belongsTo(models.invoice, {
    foreignKey: 'BusinessID'
  })
  }

  return Business
}

