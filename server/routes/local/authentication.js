const express = require('express');
const router = express.Router();
let customersDal = require('../../dal/customers');

router.post('/login',
(req, res) => {
    let newCustomer = req.body;
    customersDal.login(newCustomer, (data) => {
        res.end(JSON.stringify(
            data
        ));
    })
});

module.exports = router;
