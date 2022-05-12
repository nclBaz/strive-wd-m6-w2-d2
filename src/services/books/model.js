import mongoose from "mongoose"

const { Schema, model } = mongoose

const BooksSchema = new Schema(
  {
    asin: { type: String, required: true },
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, enum: ["horror", "fantasy", "romance", "history"] },
  },
  { timestamps: true }
)

export default model("Book", BooksSchema)
