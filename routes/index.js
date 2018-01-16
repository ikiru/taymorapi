var express = require('express')
var router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Reach index at Time: ', Date.now())
  next()
})


router.get('/', function (req, res) {
	//to do, put this in a static json file
  res.send('React API v1.0.0');
})

module.exports = router