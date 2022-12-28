import express, { Express } from "express";
import dotenv from "dotenv";

import HomeServices from "@routes/home";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.static("public"));

const port = process.env.PORT;

app.use("/api/v1", HomeServices);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
