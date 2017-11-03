var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var tenantSchema = mongoose.Schema({

  local: {
    email: String,
    password: String,
  }
});

tenantSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

tenantSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Tenant', tenantSchema);
