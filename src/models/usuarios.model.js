import { Schema, model } from "mongoose";

import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    administrador: {
        type: Boolean,
        required: true,
        default: false
    }
});

usuarioSchema.methods.EncriptarContraseña = async (contraseña) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contraseña, salt);
};

usuarioSchema.methods.CompararContraseñas = async function (contraseña) {
  return bcrypt.compare(contraseña, this.contraseña);
};

export default model('Usuario', usuarioSchema);