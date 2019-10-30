var config = require('../mongoose-db-context');

let coreAuthenticationUserModel


var Schema = config.Schema;

let coreAuthenticationUserSchema = new Schema({
  firstname: {
    type: String,
    //required: true
  },
  lastname: {
    type: String,
    //  required: true
  },
  password: {
    type: String
  },
  customer: {
    type: String,
    // required: true
  }
});


BindModel = (callback) => {
  config.authDB(mongoose => {
   coreAuthenticationUserModel = mongoose.model('customers',
     coreAuthenticationUserSchema,
      'customers');
    return callback(coreAuthenticationUserModel);
  });

}


module.exports = BindModel;
