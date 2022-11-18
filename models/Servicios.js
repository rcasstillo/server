import mongoose from "mongoose";
const { Schema } = mongoose;
const serviciosSchema =new Schema({
    nombre: {
        type: String,
        required: true
    }, 
     
    categoria: {
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
})

export default mongoose.model("Servicios", serviciosSchema);