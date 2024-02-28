import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
  eliminarIngreso,
  actualizarIngreso,
  createIngreso,
  getIngreso,
  getIngresoMesActual,
  getIngresos,
} from "../controllers/ingresos.controllers.js";

const router = Router();

router.get("/ingresos", isAuth, getIngresos);

router.get("/ingresos-mes", isAuth, getIngresoMesActual);

router.get("/ingresos/:id", isAuth, getIngreso);

router.post("/ingresos", isAuth, createIngreso);

router.put("/ingresos/:id", isAuth, actualizarIngreso);

router.delete("/ingresos/:id", isAuth, eliminarIngreso);

export default router;
