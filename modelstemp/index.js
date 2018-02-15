import Sequelize from 'sequelize'

const sequelize = new Sequelize('taymor', 'postgres', 'postgres')

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
  taxRate: sequelize.import('./taxRate'),
  timePeriod: sequelize.import('./timePeriod'),
  transactionType: sequelize.import('./transactionType'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(builtinModules);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models
