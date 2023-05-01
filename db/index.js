// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://lifes-a-beach-main-db-0acbca320b8:vfyHENdyrsYPQyrWhR8Mcfspvf2few@prod-us-central1-2.ih9la.mongodb.net/lifes-a-beach-main-db-0acbca320b8" ||
  "mongodb://127.0.0.1:27017/lifesABeach";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
