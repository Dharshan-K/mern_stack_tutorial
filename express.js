/** @format */

const express = require("express");
import Template from "./../template";

const app = express();

app.get("/", (req, res) => {
  res.status(200).get(Template());
});

export default app;
