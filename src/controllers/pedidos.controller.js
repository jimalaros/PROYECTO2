import Pedido from "../models/pedidos.model"
//import Producto from "../models/productos.model"
//import * as Precio from "./payment.controller"
import Producto from "../models/productos.model"

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

            //const precio = Precio(nombres, cantidades)

            const nuevoPedido = new Pedido({
                nombres, 
                cantidades, 
                mediodepago, 
                estado,
                precio
            });
            
            await nuevoPedido.save();
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

        await Pedido.findByIdAndUpdate(req.params.id, precio, req.body,
            {
                new: true,
            }
        );
        res.status(201).json({msg: 'Pedido editado con exito'});
    }
    else {res.status(204).json({msg: 'Faltan Datos'})}
};
  
export const EliminarPedidos = async (req, res) => {
    const { id } = req.params;
  
    await Pedido.findByIdAndDelete(id);
  
    res.status(200).json({msg: "Pedido eliminado con exito"});
};