// require session
const session = require("express-session");
const MongoStore = require("connect-mongo");
module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60000 * 60 * 24, // 60 * 1000 ms === 1 day
      },
      //<===========this is where we save the session into the DB!!!! ===============>
      store: MongoStore.create({
        mongoUrl:
          process.env.MONGODB_URI ||
          "mongodb+srv://lifes-a-beach-main-db-0acbca320b8:vfyHENdyrsYPQyrWhR8Mcfspvf2few@prod-us-central1-2.ih9la.mongodb.net/lifes-a-beach-main-db-0acbca320b8",
        //ttl => time to live
        ttl: 60 * 60 * 24, // 60sec * 60min * 24h => 1 day
      }),
    })
  );
};
