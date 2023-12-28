import express from "express";
import { connectDB } from "./config/mongo.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import cors from  "cors";


const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", routes);

const startServer = async () => {
  try {
    await connectDB();
    console.log("mongoose connected :: Atlas Cluster");
    app.listen(port, () => {
      console.log(`Server beating 💓 on port :: ${port}`);
    });
  } catch (error) {
    port;
    console.log("Error connecting to MongoDB:", error);
  }
};

startServer();
