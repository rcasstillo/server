import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    idS: {
        type: Number,
        required: true
    }
})


export default mongoose.model("Todo",TodoSchema);