export default (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
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
    zip: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
  
  })

  Location.associate = (models) => {
  // 1:N
      location.belongsTo(models.Business, {
      foreignKey: 'locationID'
    })
    }
  return User
}
