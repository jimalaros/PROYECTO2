import { Router } from "express";
const router = Router();

import * as MediosdePago from "../controllers/MediodePago.controller";

router.get("/", MediosdePago.MediosdePago);

router.post("/nuevos", MediosdePago.CrearMediodePago);

router.put("/:id", MediosdePago.ActualizarMediosdePago);

router.delete("/Eliminar/:id", MediosdePago.EliminarMediosdePago);

export default router;