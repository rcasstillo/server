import mongoose from "mongoose";
const { Schema } = mongoose;

const pescaderiaSchema = new Schema({
 nombre: {
    type: String,
    required: true
}, 
 
telefono: {
    type: Number,
    required: true
},
direccion: {
    type: String,
    required: true
},
idS: {
    type: Number,
    required: true
},
oferta:[ {
    type: Number,
    required: true}]

})
export default mongoose.model("Pescaderia", pescaderiaSchema);