const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Kook-Club";

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
