var MongoClient = require('mongodb').MongoClient;


var db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( "mongodb://localhost:27017/makersbnb", function( err, database ) {
      db = database;
      return callback( err );
    } );
  },

  getDb: function() {
    return db;
  }
};
