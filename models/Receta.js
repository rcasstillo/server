import mongoose from "mongoose";
const { Schema } = mongoose;
const recetaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },
    categoria: {
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

export default mongoose.model("Receta", recetaSchema);