import Router from "express-promise-router";
import {
  actualizarPresupuesto,
  createPresupuesto,
  eliminarGasto,
  getPresupuesto,
  getPresupuestoMesActual,
  getPresupuestos,
} from "../controllers/presupuesto,controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/presupuestos", isAuth, getPresupuestos);

router.get("/presupuestos-mes", isAuth, getPresupuestoMesActual);

router.get("/presupuestos/:id", isAuth, getPresupuesto);

router.post("/presupuestos", isAuth, createPresupuesto);

router.put("/presupuestos/:id", isAuth, actualizarPresupuesto);

router.delete("/presupuestos/:id", isAuth, eliminarGasto);

export default router;
