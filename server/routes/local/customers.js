const express = require('express');
let customersDal = require('../../dal/customers');
const router = express.Router();

router.post('/register',
    (req, res) => {
        let newCustomer = req.body;
        customersDal.register(newCustomer, (data) => {
            res.end(JSON.stringify(
                data
            ));
        })
    });

router.get('/getAllCustomers',
    (req, res) => {
        customersDal.getAllCustomers(
            (data) => {
                res.end(JSON.stringify(
                    data
                ));
            });
    });

router.post('/delete',
    (req, res) => {
        let newCustomer = req.body;
        customersDal.delete(newCustomer, (data) => {
            res.end(JSON.stringify(
                data
            ));
        })
    });

module.exports = router;
