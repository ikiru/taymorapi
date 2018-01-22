const pg = require("pg"); 

const dbConfig = {
    user: 'jeffwinkler',
    password: '',
    server: '127.0.0.1', 
    database: 'GPS',
    options: {
        encrypt: true,
				port : '1434'
    }
}

//Connection Promise
const cp = pg.connect(dbConfig).then(pool =>{
	return pool;
}).catch(err => {
	console.log(err)
})

module.exports = cp; 