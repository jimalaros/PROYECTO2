import Producto from "../models/productos.model"
    
export const ProductosxDefecto = async (req,res) => {
    try {
        const contador = await Producto.estimatedDocumentCount();
        
        // Verificación de productos existentes
        if(contador>0) return;
        
        // Productos por defecto
        const productos  = await Promise.all([
            new Producto ({ nombre: "Hamburguesa", precio: 5000 }).save(),
            new Producto ({ nombre: "Hamburguesa doble", precio: 10500 }).save(),
            new Producto ({ nombre: "Perro", precio: 5500 }).save(),
            new Producto ({ nombre: "Perro especial", precio: 9000 }).save(),
            new Producto ({ nombre: "Coca cola", precio: 3000 }).save(),
            new Producto ({ nombre: "Sprite", precio: 2500 }).save(),
            new Producto ({ nombre: "Agua", precio: 5000 }).save()
        ]);

        res.json(productos);

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

export const Productos = async (req,res) => {
    try {
        const productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }   
};

export const CrearProducto = async (req, res) => {
    const { nombre, precio } = req.body;
  
    try {
        if(nombre && precio)
        {
            const ProductoRepetido = await Producto.findOne({ nombre });
            if (ProductoRepetido)
            {
                res.status(400).json('El Producto ya existe');
            }
            else
            {
                new Producto({...req.body}).save();
                res.status(201).json({msg:'Producto creado con exito'});
            }
        }
        else { res.status(400).json({msg: 'Faltan datos'}) }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
  
export const ActualizarProductos = async (req, res) => {
    try {
        const { nombre, precio } = req.body;
        if(nombre && precio)
        {
            const { id } = req.params;
            const updates = {...req.body};
            const options = { new: true };
            await Producto.findByIdAndUpdate(id, updates, options);
            res.status(200).json({msg: 'Producto editado con exito'});
        }
<<<<<<< HEAD
        else { res.status(400).json({msg: 'Faltan datos'}) }    
=======
        else { res.status(204).json({msg: 'Faltan datos'}) }    
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
<<<<<<< HEAD
=======
    
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
};
  
export const EliminarProductos = async (req, res) => {
    try {
        const { id } = req.params;
        if(id)
        {
            await Producto.findByIdAndDelete(id);
            res.status(200).json({msg: "El producto fue eliminado con exito"});
        }
<<<<<<< HEAD
        else { res.status(400).json({msg: 'Faltan datos'}) }   
=======
        else { res.status(204).json({msg: 'Faltan datos'}) }   
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);  
    } 
<<<<<<< HEAD
};
=======
};
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
