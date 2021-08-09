import { Router } from "express";
const router = Router();

import * as Pedido from "../controllers/pedidos.controller";

router.get("/", Pedido.Pedidos);

router.post("/ordenar", Pedido.Ordenar);

router.put("/:id", Pedido.ActualizarPedidos);

router.delete("/Eliminar/:id", Pedido.EliminarPedidos);

export default router;