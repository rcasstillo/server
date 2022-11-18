import mongoose from "mongoose";
const { Schema } = mongoose;
const quienesSchema = new Schema({
 mision: {
    type: String,
    required: true
}, 
 
vision: {
    type: String,
    required: true
},
valor: {
    type: String,
    required: true
},
historia: {
    type: String,
    required: true
},
correo: {
    type: String,
    required: true
},
idS: {
    type: Number,
    required: true
}

})

export default mongoose.model("QuienesS", quienesSchema);