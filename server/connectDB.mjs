import mongoose from "mongoose";
import bluebird from "bluebird";

const MONGO_HOST = process.env.MONGO_HOST || "localhost:27017";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE || "test";
const MONGO_INITDB_USERNAME = process.env.MONGO_INITDB_USERNAME || "user";
const MONGO_INITDB_PASSWORD = process.env.MONGO_INITDB_PASSWORD || "password";

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const connectDb = (time = 0) => {
  mongoose.Promise = bluebird;

  const options = {
    promiseLibrary: global.Promise,
    poolSize: 50,
    keepAlive: 30000,
    connectTimeoutMS: 2000,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  };
  const stringConnect =
    "mongodb://" +
    MONGO_INITDB_USERNAME +
    ":" +
    MONGO_INITDB_PASSWORD +
    "@" +
    MONGO_HOST +
    ":" +
    MONGO_PORT +
    "/" +
    MONGO_INITDB_DATABASE;
  sleep(time);
  //  console.log(stringConnect);
  mongoose.connect(stringConnect, options);
  return mongoose.connection;
};

export default connectDb;
