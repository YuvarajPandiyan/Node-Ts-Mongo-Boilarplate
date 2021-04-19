import { connect } from "./db";
import express from "express";
import config from "./config";

export const app = express();

app.get("/", (req, res) => {
  res.send("haii");
});

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
