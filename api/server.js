import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import TodoRoutes from "./routes/Todo.js";

//initialize dotenv
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//use all routes from todo routes
app.use("/", TodoRoutes);

//initialize server and connect to mongoDB
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port:${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
