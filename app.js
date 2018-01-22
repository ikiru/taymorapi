const express = require('express')
const bodyParser = require('body-parser')
const app = express()


//For body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//For header middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');		
    next();
});
console.log('passed json middleware');
//To do, put all routes in a json file and import it to automatically generate routes here
app.use('/', require('./routes/index'))
//app.use('/api', require('./routes/test'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))