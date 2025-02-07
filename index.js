import express from "express";
import connectDB from "./db/connectDB.js";
import { deleteManyDoc } from "./models/Movies.js";
const app = express();

const port = process.env.PORT || 5000;
const databaseURL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(databaseURL);
// createDoc();
// insertMany()
// getAllDoc();
// singeDoc();
// updateDoc("67a6523828524127e8d656bf");
// updateManyDoc();
// deleteDoc("67a6523828524127e8d656bf");
// deleteManyDoc();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
