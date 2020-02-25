/// Core file for the MongoDB Database
const mongo = require("mongodb").MongoClient;

const uri = require("../config/keys").mongoURI;
const { mongoose } = require("../electron/packages");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database."))
  .catch(err => console.log(err));

/*async function connectoToMongoDB() {
  return await mongo.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}

async function addItemToDatabase() {
  const db = await connectoToMongoDB();
  const collection = await db.db("Test").collection("Test2");
  await collection.insertOne({
    name: "Eclipse",
    psw: "123"
  });
}

addItemToDatabase();*/
