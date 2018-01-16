const mssql = require("mssql"); 

const dbConfig = {
    user: 'Tr@ck',
    password: 'W4@tM@tt3r5',
    server: '10.0.0.54', 
    database: 'GPS',
    options: {
        encrypt: true,
				port : '1433'
    }
}

//Connection Promise
const cp = mssql.connect(dbConfig).then(pool =>{
	return pool;
}).catch(err => {
	console.log(err)
})

module.exports = cp; 