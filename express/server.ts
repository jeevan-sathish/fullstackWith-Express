import express from "express";
import cors from "cors";
import { Messagerouter, fileRouter } from "./routes/message.route.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", Messagerouter);
app.use("/api", fileRouter);

app.listen(3000, () => {
  console.log(`rinning successfully: http://localhost:3000`);
});
