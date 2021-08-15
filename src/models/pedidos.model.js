import { Schema, model } from "mongoose";

const PedidoSchema = new Schema({
    usuario: {
        type: String,
        required:true
    },
    direccion: {
        type: String,
        required:true
    },
    pedidos: [{
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
            type: Number
        }
    }]
});

<<<<<<< HEAD
export default model('Pedido', PedidoSchema);
=======
export default model('Pedido', PedidoSchema);
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
