import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  date: String,
  name: String,
  price: String,
  category: String,
  image: String,
  title: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
