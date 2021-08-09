import express from "express";
const app = express();
import './basededatos';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDocs from 'swagger-jsdoc';

import usuariosRoutes from './routes/usuarios.routes';
import productosRoutes from './routes/productos.routes';
import ordenesRoutes from './routes/pedidos.routes';
import MediosdePagoRoutes from './routes/MediodePago.routes';

import * as options from './swagger'
const swaggerSpecs = swaggerJSDocs(options.swaggerOptions);

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))
app.set('puerto', process.env.PORT || 5000);

app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/pedidos', ordenesRoutes);
app.use('/mediosdepago', MediosdePagoRoutes);
//app.use(basicAuth({ authorizer: autorización }));

app.listen(app.get('puerto'), () => { 
    console.log('Escuchando en el puerto ', app.get('puerto')) 
});
