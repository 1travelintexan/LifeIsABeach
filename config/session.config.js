// require session
const MongoStore = require("connect-mongo");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Kook-Club";

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60000 * 60 * 24, // 60 * 1000 ms === 1 day
      },
      //<===========this is where we save the session into the DB!!!! ===============>
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
        useNewUrlParser: true,
        //ttl => time to live
        ttl: 60 * 60 * 24, // 60sec * 60min * 24h => 1 day
      }),
    })
  );
};
