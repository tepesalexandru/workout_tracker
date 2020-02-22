const mongo = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://adminUser:!adminuser@workouttracker-kyktn.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
  return await mongo.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
};

async function startUp() {
  const db = await connectDB();
  const collection = await db.db("Test").collection("Test2");
  await collection.insertOne({
    name: "Eclipse",
    psw: "123"
  });
}

startUp();
