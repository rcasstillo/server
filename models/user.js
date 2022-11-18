import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    telefono: {
      type: Number,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    idS: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      require: true,
    },
    resetCode: "",
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
