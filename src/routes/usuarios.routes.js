import { Router } from "express";
const router = Router();

import * as Usuarios from "../controllers/usuarios.controller";
import { Verificar } from "../middlewares/token.middleware"

router.get("/", Verificar, Usuarios.Usuarios);

router.post("/nuevos", Usuarios.CrearUsuario);

router.post("/Login", Usuarios.InicioSesion);

router.delete("/Eliminar/:id", Usuarios.EliminarUsuarios);

export default router;