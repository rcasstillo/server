import mongoose from "mongoose";
const { Schema } = mongoose;
const ofertaSchema = new Schema({
    pescaderia: {
        type: Number
        ,
        required: true
    },
    producto: {
        type: Number
        ,
        required: true
    },
    idS: {
        type: Number,
        required: true
    }

})

export default mongoose.model("Oferta", ofertaSchema);