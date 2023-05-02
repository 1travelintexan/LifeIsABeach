const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://lifesabeach-main-db-07de25de7bb:pv5Wj5C9PWxZcvJdtphtQ8fkXup717@prod-us-central1-2.ih9la.mongodb.net/lifesabeach-main-db-07de25de7bb" ||
  "mongodb://localhost:27017/Kook-Club";

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
  })
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
