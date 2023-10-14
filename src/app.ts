import cors from "cors";
import express from "express";
import { MESSAGES } from "../constants/message";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(MESSAGES.SERVER_RES);
});
export default app;
