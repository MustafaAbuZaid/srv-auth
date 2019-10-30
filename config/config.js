var convict = require('convict');
var path = require('path');

var envs = {
    "env": "env"
}

// Define a schema
var config = convict({
    env: {
        doc: "The application environment.",
        format: Object.keys(envs),
        default: "env",
        env: "NODE_ENV"
    },
    port: {
        doc: "",
        format: "port",
        default: 3000
    },
    server_ip: {
        doc: "",
        format: "*",
        default: ""
    },
    expirationTime: {
        doc: "",
        format: "duration",
        default: 30
    },
    externalRepos: {
        vehicles: {
            doc: "",
            format: "*",
            default: "localhost:3006"
        },
        customers: {
            doc: "",
            format: "*",
            default: "localhost:3007"
        },
        tracking: {
            doc: "",
            format: "*",
            default: "localhost:3008"
        }
    },
    db: {
        server: {
            doc: "",
            format: "*",
            default: "localhost"
        },
        port: {
            doc: "",
            format: "port",
            default: 27017
        },
        authDb: {
            doc: "",
            format: "*",
            default: "vehicle-tracker"
        }
    }
});

// Load environment dependent configuration
var env = config.get('env');
console.log(env);
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
