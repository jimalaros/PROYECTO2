import Pedido from "../models/pedidos.model";
//import * as Precio from "./payment.controller"
import Producto from "../models/productos.model";
import Usuario from "../models/usuarios.model";

import jwt from "jsonwebtoken";
import config from "../config"; 

export const Pedidos = async (req,res) => {
    try {
        const pedidos = await Pedido.find();
        if(pedidos) { res.json(pedidos) }
        else {res.status(204).json({msg: 'Faltan Datos'})}
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }   
};

export const CrearOrden = async (req,res) =>
{
    try {
        const bearerHeader = req.headers['authorization'];
        if(bearerHeader)
        {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
    
            //Decodificar el token
            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await Usuario.findById(id);

            const usuario = user.nombre;
            const direccion = user.direccion;

            const InicioOrden = new Pedido({ usuario, direccion });
            await InicioOrden.save();
            res.status(201).json({msg: 'Datos de la orden creados con exito'});
        }
        else { res.status(401).send({ auth: false, msg: "Ha olvidado el token" })}
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

export const Ordenar = async (req,res) =>
{
    try {
        const {nombres, cantidades, mediodepago, estado} = req.body;

        if(nombres && cantidades && mediodepago && estado)
        {
            const n = cantidades.length;

            const vector = await Producto.find({nombre: {$in: nombres}});
            const prices = vector.map(price => price.precio);

            let precios=[];
            for (let index = 0; index < n; index++) {
                let p = prices[index];
                precios.push(p);
            }

            let precio=0;
            for (let d = 0; d < n; d++) 
            {
                let Q = cantidades[d]*precios[d];
                precio=precio+Q;   
            }
            
            const Agregar = await Pedido.findById(req.params.id);
            Agregar.pedidos.push({...req.body, precio});
            
            await Agregar.save();
            res.status(201).json({msg: 'Pedido creado con exito'});
        }
        else {res.status(204).json({msg: 'Faltan Datos'})}
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

export const ActualizarPedidos = async (req, res) => {
    
    const {nombres, cantidades, mediodepago, estado} = req.body;
    
    if(nombres && cantidades && mediodepago && estado)
    {

        const n = cantidades.length;
        const vector = await Producto.find({nombre: {$in: nombres}});
        const prices = vector.map(price => price.precio);
        let precios=[];
        for (let index = 0; index < n; index++) {
            let p = prices[index];
            precios.push(p);
        }

        let precio=0;
        for (let d = 0; d < n; d++) 
        {
            let Q = cantidades[d]*precios[d];
            precio=precio+Q;   
        }
        
        const updates = {...req.body, precio};
        const options = { new: true };

        const Agregar = await Pedido.findById(req.params.id);
        const pedido = Agregar.pedidos;
        //console.log(pedido[0]._id);
        const id = pedido[0]._id;
        const Update = await Pedido.findByIdAndUpdate(id, updates, options);
        res.status(200).json({msg: 'Pedido editado con exito'});
    }
    else {res.status(204).json({msg: 'Faltan Datos'})}
};
  
export const EliminarPedidos = async (req, res) => {
    const { id } = req.params;
  
    await Pedido.findByIdAndDelete(id);
  
    res.status(200).json({msg: "Pedido eliminado con exito"});
};
