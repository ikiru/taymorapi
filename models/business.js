
export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
   
    BusinessName: {
      type: Sequelize.STRING
    },

  })

  return User;
}

