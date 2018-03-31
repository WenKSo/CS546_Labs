//Name: Wenkang Su
const MongoClient = require("mongodb").MongoClient;

const settings = {
  mongoConfig: {
      serverUrl: "mongodb://localhost:27017/",
      database: "Su_Wenkang_lab4"
  }
};

let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
let _connection = undefined;

let connection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(fullMongoUrl);
  }

  return _connection;
};

module.exports = connection;