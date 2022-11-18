import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = new Schema({
 name: {
    type: String,
    required: true
}, 
 informacion_nutricional: {
    type: String,
    required: true
},
calories: {
    type: Number,
    required: true
},
precio: {
    type: Number,
    required: true
},
idS: {
    type: Number,
    required: true
},

})

export default mongoose.model("Producto", productSchema);