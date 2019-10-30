var config = require('../../config/config');
const request = require('request');

module.exports = {
    getAllVehicles: function (callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/vehicles/getAllVehicles',
            method: "GET"
        }, (err, data, response) => {
            return callback(JSON.parse(data.body));
        })
    },
    register: function (newCustomer, callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/vehicles/register',
            method: "POST",
            json: newCustomer
        }, (response) => {
            return callback(response);
        })
    },
    delete: function (newCustomer, callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/vehicles/delete',
            method: "POST",
            json: newCustomer
        }, (response) => {
            return callback(response);
        })
    },

    login: function (newCustomer, callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/customers/login',
            method: "POST",
            json: newCustomer
        }, (err, data, response) => {
            return callback(response);
        })
    }
}