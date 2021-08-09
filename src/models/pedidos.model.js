import { Schema, model } from "mongoose";

const ordenSchema = new Schema({
    nombres: {
        type: Array,
        required: true
    },
    cantidades: {
        type: Array,
        required: true
    },
    mediodepago: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    }
});

export default model('Orden', ordenSchema);