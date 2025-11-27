import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";

const courseSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    // startDate: { type: Date },
    // endDate: { type: Date },
    image: String,
    credits: Number,
    description: String,
    modules: [moduleSchema],
  },
  { collection: "courses" }
);
export default courseSchema;
