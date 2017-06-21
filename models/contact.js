var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = Schema(
  {
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    phone: {type: String},
    usernameid: {type: String, required: true, max: 100},
  }
);


// Virtual for author's URL
ContactSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);