var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost/test";

var insertDocuments = function(dados, db, callback) {
  db.collection("cadastroUser").insertMany(dados, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback(result);
  });
};

function end_request(response, data_print) {
  response.writeHead(200, {
    "Content-Type": "text/json"
  });
  response.write(JSON.stringify(data_print));
  response.end();
}
function connectToMongo(response, dados, callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    //Executo a funcao enviada por parametro.
    callback(dados, db, function(result) {
      db.close();
      end_request(response, result);
    });
  });
};

exports.insertDocuments = insertDocuments;
exports.end_request = end_request;
exports.connectToMongo = connectToMongo;