// 
// var insertStuff = function(db, callback){
//
//   var collection = db.collection('landlord');
//   collection.insertMany([
//     {name: 'alex'}, {propertyname: String}
//   ]), function(err, result) {
//       assert.equal(err, null);
//       assert.equal(2, result.result.n);
//       assert.equal(2, result.ops.length);
//       console.log("Inserted 2 documents into the document collection");
//   callback(result);
//   };
// };


var insertDocuments = function(db, callback) {
//   // Get the documents collection
  var collection = db.collection('documents');
//   // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
