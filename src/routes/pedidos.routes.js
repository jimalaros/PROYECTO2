import { Router } from "express";
const router = Router();

import * as Pedido from "../controllers/pedidos.controller";

router.get("/", Pedido.Pedidos);

router.post("/Crear", Pedido.CrearOrden);

router.post("/Ordenar/:id", Pedido.Ordenar);

router.put("/Editar/:id", Pedido.ActualizarPedidos);

router.delete("/Eliminar/:id", Pedido.EliminarPedidos);

export default router;