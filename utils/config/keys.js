/// Core file for keys
dbPassword =
  "mongodb://adminUser:!adminuser@testdatabase-shard-00-00-kyktn.mongodb.net:27017,testdatabase-shard-00-01-kyktn.mongodb.net:27017,testdatabase-shard-00-02-kyktn.mongodb.net:27017/test?ssl=true&replicaSet=TestDatabase-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword
};
