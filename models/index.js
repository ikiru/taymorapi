const Sequelize = require ('sequelize')

const sequelize = new Sequelize('betteroffcostumes', 'Pepper00~~!!', 'taymor_development',{
  dialect: 'postgres'
})

module.exports = function(application, req, res){
    const models= {
    activeLevel: sequelize.import('./activeLevel'),
    business: sequelize.import('./business'),
    businessType: sequelize.import('./businessType'),
    colors: sequelize.import('./colors'),
    costumes: sequelize.import('./costumes'),
    employees: sequelize.import('./employees'),
    images: sequelize.import('./images'),
    invoice: sequelize.import('./invoice'),
    keyWords: sequelize.import('./keyWords'),
    locations: sequelize.import('./locations'),
    locationType: sequelize.import('./locationType'),
    rentalLength: sequelize.import('./rentalLength'),
    rentalList: sequelize.import('./rentalList'),
    renters: sequelize.import('./renters'),
    renterType: sequelize.import('./renterType'),
    roles: sequelize.import('./roles'),
    securityLevel: sequelize.import('./securityLevel'),
    shared: sequelize.import('./shared'),
    shows: sequelize.import('./shows'),
    sizes: sequelize.import('./sizes'),
    timePeriod: sequelize.import('./timePeriod'),
    transactionType: sequelize.import('./transactionType'),
  }; 
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(builtinModules);
    }
  })
}

