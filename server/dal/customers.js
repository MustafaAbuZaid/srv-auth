var config = require('../../config/config');
const request = require('request');

module.exports = {
    getAllCustomers: function (callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/customers/getAllCustomers',
            method: "GET"
        }, (err, data, response) => {
            return callback(JSON.parse(data.body));
        })
    },
    register: function (newCustomer, callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/customers/register',
            method: "POST",
            json: newCustomer
        }, (response) => {
            return callback(response);
        })
    },
    delete: function (newCustomer, callback) {
        request({
            url: 'http://' + config.get('externalRepos').customers + '/api/customers/delete',
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