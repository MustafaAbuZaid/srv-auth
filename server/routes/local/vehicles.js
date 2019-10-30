const express = require('express');
let vehiclesDal = require('../../dal/vehicles');
const router = express.Router();

router.post('/register',
  (req, res) => {
    let newCustomer = req.body;
    vehiclesDal.register(newCustomer, (data) => {
      res.end(JSON.stringify(
        data
      ));
    })
  });

router.get('/getAllVehicles',
  (req, res) => {
    vehiclesDal.getAllVehicles(
      (data) => {
        res.end(JSON.stringify(
          data
        ));
      });
  });

router.post('/delete',
  (req, res) => {
    let newCustomer = req.body;
    vehiclesDal.delete(newCustomer, (data) => {
      res.end(JSON.stringify(
        data
      ));
    })
  });

module.exports = router;
