import jwt from 'jsonwebtoken';
import Usuario from '../models/usuarios.model';
import config from '../config';

export const Usuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) { res.status(500).json(error); }
};

export const CrearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, direccion, contraseña } = req.body;
        if (nombre && apellido && correo && telefono && direccion && contraseña) {
            const UsuarioRepetido = await Usuario.findOne({ correo });
            if (UsuarioRepetido) {
                res.status(400).json("El Correo ya existe en la base de datos");
            } else {
                const usuario = new Usuario({
                    nombre,
                    apellido,
                    correo,
                    telefono,
                    direccion,
                    contraseña,
                });
                // Para encriptar la contraseña del usuario
                usuario.contraseña = await usuario.EncriptarContraseña(contraseña);  
                await usuario.save();

                /**const token = jwt.sign({ id: usuario._id }, config.secret, {
                    expiresIn: 60 * 60 * 24, // expires in 24 hours
                });**/

                res.status(201).json("Usuario creado con exito");
            }
        } else { res.status(400).json("Faltan datos"); }
    } catch (error) { res.status(500).json(error); }
};

// eslint-disable-next-line consistent-return
export const InicioSesion = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        if (correo && contraseña) {
            const usuario = await Usuario.findOne({ correo: req.body.correo });
            if (!usuario) {
                res.status(404).send({ msg: 'El usuario no existe en la base de datos' });
            } else {
                const password = await usuario.CompararContraseñas(
                    req.body.contraseña, usuario.contraseña,
                );
                if (!password) {
                    res.status(401).send({ auth: false, token: null });
                } else {
                    const token = jwt.sign({ id: usuario._id }, config.secret, {
                        expiresIn: 60 * 60 * 24,
                    });
                    res.status(200).json({ auth: true, token });
                }
            }
        } else { res.status(400).json({ msg: 'Faltan datos' }); }
    } catch (error) { res.status(500).json(error); }
};

export const EliminarUsuarios = async (req, res) => {
    const { id } = req.params;
    if (id) {
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({ msg: 'El Usuario fue eliminado con exito' });
    } else { res.status(400).json({ msg: 'Faltan datos' }); }
};
