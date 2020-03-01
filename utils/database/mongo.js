const uri = require("../config/keys").mongoURI;
const { mongoose } = require("../electron/packages");

const User = require("../database/models/User");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch(err => console.log(err));

const mongoConnection = mongoose.connection;
mongoConnection.on("error", console.error.bind(console, "error connection:"));
mongoConnection.once("open", () => {
<<<<<<< HEAD
  //console.log(mongoConnection.collection.getIndexes());
=======
>>>>>>> feature-register-dom
  console.log("we're connected!");
});
/*const new_user = new User({
    name: "Hello",
    email: "this is a test",
    password: "123"
  });

  new_user.save((err, user) => {
    if (err) return console.error(err);
    console.log(user + " has been saved to the database");
  });
});*/

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
