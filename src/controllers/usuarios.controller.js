import Usuario from "../models/usuarios.model";
import config from "../config";
import jwt from "jsonwebtoken";

export const Usuarios = async (req,res) => {
    try 
    {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }   
};

export const CrearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, direccion, contraseña, administrador } = req.body;
        if( nombre && apellido && correo && telefono && direccion && contraseña && administrador )
        {
            const UsuarioRepetido = await Usuario.findOne({ correo });
            if (UsuarioRepetido)
            {
                res.status(400).json('El Correo ya existe en la base de datos');
            }
            else
            {   
                const usuario = new Usuario({
                    nombre,
                    apellido,
                    correo,
                    telefono,
                    direccion,
                    contraseña,
                    administrador
                });
                // Para encriptar la contraseña del usuario
                usuario.contraseña = await usuario.EncriptarContraseña(contraseña);  
                await usuario.save();

                const token = jwt.sign({ id: usuario.id }, config.secret, {
                    expiresIn: 60 * 60 * 24, // expires in 24 hours
                });
                res.status(201).json({ auth: true, token });
            }
        }
        else { res.status(400).json({msg: 'Faltan datos'}) }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const InicioSesion = async(req,res) => {
    try {
        const { correo, contraseña } = req.body;
        if (correo && contraseña)
        {
            const usuario = await Usuario.findOne({ correo: req.body.correo });
            if (!usuario) {
                return res.status(404).send("Los datos no existen en la base de datos");
            }
            const password = await usuario.CompararContraseñas(req.body.contraseña, usuario.contraseña);
            if (!password) {
                return res.status(401).send({ auth: false, token: null });
            }
            const token = jwt.sign({ id: usuario._id }, config.secret, {
                expiresIn: 60 * 60 * 24,
            });
            res.status(200).json({ auth: true, token });
        }
        else { res.status(400).json({msg: 'Faltan datos'}) }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const EliminarUsuarios = async (req, res) => {
    const { id } = req.params;
    
    if(id)
    {
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({msg: "El Usuario fue eliminado con exito"});
    }
    else { res.status(400).json({msg: 'Faltan datos'}) }
};