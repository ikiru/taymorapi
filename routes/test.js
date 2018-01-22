const express = require('express')
const router = express.Router()
const sql = require('pg')

// connection promise
const cp = require('../db')

router.use(function timeLog (req, res, next) {
  console.log('Reach index at Time: ', Date.now())
  next()
})

// router.post('/getClient', function(req, res, next) {
// 	cp.then(pool => {	
// 			return pool.request()
// 			.input('ynActive', sql.Bit, req.body.ynActive)
// 			.query('exec gps.dbo.v3_client_get @ynActive')
// 	}).then(result => {
// 			let response = [];
// 			for(let i=0; i<result.recordsets[0].length; i++){
// 				let client = {
// 					numClientID: result.recordsets[0][i].numClientID,
// 					txtName: result.recordsets[0][i].txtName
// 				}
// 				response.push(client)
// 			}
// 			res.send(response);
// 	}).catch(err => {
// 		console.log(err);
// 	})
// });

// router.post('/getContact', function(req, res, next) {
// 	cp.then(pool => {	
// 			return pool.request()
// 			.input('numClientID', sql.Int, req.body.numClientID)
// 			.input('numContactID', sql.Int, req.body.numContactID)
// 			.input('ynActive', sql.Bit, req.body.ynActive)
// 			.query('exec gps.dbo.v3_Contact_get @numClientID, @numContactID, @ynActive')
// 	}).then(result => {
// 			res.send(result.recordsets[0]);
// 	}).catch(err => {
// 		console.log(err);
// 	})
// });


// router.post('/getLastDeviceLocation', function(req, res, next) {
// 	cp.then(pool => {	 
// 			return pool.request()
// 			.input('numClientID', sql.Int, req.body.numClientID)
// 			.query('exec gps.dbo.v3_lastlocation_get @numClientID')
// 	}).then(result => {
// 		res.send(result.recordsets[0]);
// 	}).catch(err => {
// 		console.log(err);
// 	})
// });

// router.post('/getClientDevice', function(req, res, next) {
// 	cp.then(pool => {	 
// 			return pool.request()
// 			.input('numClientID', sql.Int, req.body.numClientID)
// 			.query('exec gps.dbo.v3_Device_get @numClientID')
// 	}).then(result => {
// 		res.send(result.recordsets[0]);
// 	}).catch(err => {
// 		console.log(err);
// 	})
// });

module.exports = router