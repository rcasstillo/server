import mongoose from "mongoose";
const { Schema } = mongoose;

const consejoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idS: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    img:
    {
        type: String,
        require: true
    }

})

export default mongoose.model("ConsejoDir", consejoSchema);