/** @format */

import config from "../config/config";
import app from "../server/express";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error("unable to connect");
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server started at ${config.port}`);
});
