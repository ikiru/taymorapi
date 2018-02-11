import Sequelize from 'sequelize'

const sequelize = new Sequelize('taymor', 'postgres', 'postgres')

const models= {
  activeLevel: sequelize.import('./activeLevel'),
  business: sequelize.import('./business'),
  businessType: sequelize.import('./businessType'),
  colors: sequelize.import('./colors'),
  costumes: sequelize.import('./costumes'),
  costumeTimePeriod: sequelize.import('./costumeTimePeriod'),
  descriptionKeyWords: sequelize.import('./descriptionKeyWords'),
  employees: sequelize.import('./employees'),
  images: sequelize.import('./images'),
  locations: sequelize.import('./locations'),
  locationType: sequelize.import('./locationType'),
  rentalTimePeriod: sequelize.import('./rentalTimePeriod'),
  renters: sequelize.import('./renters'),
  securityLevel: sequelize.import('./securityLevel'),
  shows: sequelize.import('./shows'),
  shared: sequelize.import('./shared'),
  taxRate: sequelize.import('./taxRate'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(builtinModules);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models
