import Router from "express-promise-router";
import {
  actualizarTipo,
  createTipo,
  eliminarTipo,
  getTipo,
  getTipos,
} from "../controllers/tipos.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipos", isAuth, getTipos);

router.get("/tipos/:id", isAuth, getTipo);

router.post("/tipos", isAuth, createTipo);

router.put("/tipos/:id", isAuth, actualizarTipo);

router.delete("/tipos/:id", isAuth, eliminarTipo);

export default router;
