import MediodePago from "../models/MediodePago.model"
    
export const MediosdePagoxDefecto = async (req,res) => {
    try {
        const contador = await MediodePago.estimatedDocumentCount();
        
        // Verificación de medios de pago existentes
        if(contador>0) return;
        
        // Medios depago por defecto
        const mediosdepago  = await Promise.all([
            new Producto ({ nombre: "Efectivo"}).save(),
            new Producto ({ nombre: "Tarjeta de credito"}).save(),
            new Producto ({ nombre: "Datafono"}).save(),
            new Producto ({ nombre: "Nequi"}).save()
        ]);

        res.json(mediosdepago);

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

export const MediosdePago = async (req,res) => {
    try {
        const mediosdepago = await Producto.find();
        res.json(mediosdepago)
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }   
};

export const CrearMediodePago = async (req, res) => {
    const { nombre, precio } = req.body;
  
    try {
        const MediodePagoRepetido = await MediodePago.findOne({ nombre });
        if (MediodePagoRepetido)
        {
            res.status(400).json('El Medio de pago ya existe');
        }
        else
        {
            const NuevoMediodePago = new MediodePago({
                nombre
            });
        
            const MediodePagoCreado = await NuevoMediodePago.save();
      
            res.status(201).json(MediodePagoCreado);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
  
export const ActualizarMediosdePago = async (req, res) => {
    const updatedMediodePago = await MediodePago.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updatedMediodePago);
};
  
export const EliminarMediosdePago = async (req, res) => {
    const { id } = req.params;
  
    await MediodePago.findByIdAndDelete(id);
  
    res.status(200).json({msg: "El medio de pago fue eliminado con exito"});
};