import mongoose from "mongoose";
const { Schema } = mongoose;
const especiesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },
    idS: {
        type: Number,
        required: true
    },
    img:
    {
        type: String,
        require: true
    }

})

export default mongoose.model("Especies", especiesSchema);