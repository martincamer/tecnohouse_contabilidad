import Router from "express-promise-router";
import {
  actualizarPresupuesto,
  createPresupuesto,
  eliminarGasto,
  getPresupuesto,
  getPresupuestoDelMes,
  getPresupuestos,
} from "../controllers/presupuesto,controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/presupuestos", isAuth, getPresupuestos);

router.get("/presupuestos/mes", isAuth, getPresupuestoDelMes);

router.get("/presupuestos/:id", isAuth, getPresupuesto);

router.post("/presupuestos", isAuth, createPresupuesto);

router.put("/presupuestos/:id", isAuth, actualizarPresupuesto);

router.delete("/presupuestos/:id", isAuth, eliminarGasto);

export default router;
