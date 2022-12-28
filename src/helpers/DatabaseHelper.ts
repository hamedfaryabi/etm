import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB...");
  })
  .catch((error) => {
    console.error("failed to connect!", error);
  });

export default mongoose;
