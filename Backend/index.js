import express from "express";
import bookRoute from "./route/book.route.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js";
import feedbackRoute from "./route/feedback.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB
try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("error connecting to mongoDB", error);
}
//connect to mongo Databse

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/feed", feedbackRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
