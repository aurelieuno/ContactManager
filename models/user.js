var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = Schema(
  {
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
  }
);


// Schema Methods
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//Export model
module.exports = mongoose.model('User', UserSchema);