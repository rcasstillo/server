import mongoose from "mongoose";
const { Schema } = mongoose;
const preguntaSchema = new Schema({
 pregunta: {
    type: String,
    required: true
}, 
 
respuesta: {
    type: String,
    required: true
},
idS: {
    type: Number,
    required: true
}
})

export default mongoose.model("Pregunta", preguntaSchema);