import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const taskSchema = new Schema(
  {
    task: {
      type: String,
      trim: true,
      required: true,
      max: 200,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model('Tasks',taskSchema);