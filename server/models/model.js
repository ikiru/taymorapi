/*
*
* Connections
*
*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

/*
*
* Models
*
*/

const Active_level = sequelize.define('active_level', {
  activeLevelId: {
    type: Sequelize.BIGINT
  },
  txtActiveLevelName: {
    type: Sequelize.STRING
  }
});

const Color = sequelize.define('color', {
  colorID: {
    type: Sequelize.BIGINT
  },
  txtColorName: {
    type: Sequelize.STRING
  }
});

const RentalDistance = sequelize.define('rental_distance', {
  rentalDistanceID: {
    type: Sequelize.BIGINT
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  }
});

const RentalRate = sequelize.define('rental_rate', {
  rentalRateID: {
    type: Sequelize.BIGINT
  },
  intRentalRate: {
    type: Sequelize.INTEGER
  }
});

const RentalTerms= sequelize.define('rental_terms', {
  rentalTermsID: {
    type: Sequelize.BIGINT
  },
  intRentalTerms: {
    type: Sequelize.INTEGER
  }
});

const RentalTimes= sequelize.define('rental_times', {
  rentalTimesID: {
    type: Sequelize.BIGINT
  },
  intRentalTimes: {
    type: Sequelize.INTEGER
  }
});

const SecurityLevel= sequelize.define('security_level', {
  SecurityLevelID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});