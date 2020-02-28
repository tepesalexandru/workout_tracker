/// Core file for the MongoDB Database
const mongo = require("mongodb").MongoClient;

const uri = require("../config/keys").mongoURI;
const { mongoose } = require("../electron/packages");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database."))
  .catch(err => console.log(err));

const mongoConnection = mongoose.connection;
mongoConnection.on("error", console.error.bind(console, "error connection:"));
mongoConnection.once("open", () => {
  console.log("we're connected!");
});

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
