import Router from "express-promise-router";
import {
  createIngreso,
  actualizarIngreso,
  eliminarGasto,
  getIngreso,
  getIngresos,
  getIngresosDelMes,
} from "../controllers/gastos.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/ingresos", isAuth, getIngresos);

router.get("/ingresos/mes", isAuth, getIngresosDelMes);

router.get("/ingresos/:id", isAuth, getIngreso);

router.post("/ingresos", isAuth, createIngreso);

router.put("/ingresos/:id", isAuth, actualizarIngreso);

router.delete("/ingresos/:id", isAuth, eliminarGasto);

export default router;
