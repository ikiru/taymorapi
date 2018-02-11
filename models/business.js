
export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
   
    name: {
      type: Sequelize.STRING
    },
    taxRate: {
      type: Sequelize.INTEGER
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

  }

  return Business
}

