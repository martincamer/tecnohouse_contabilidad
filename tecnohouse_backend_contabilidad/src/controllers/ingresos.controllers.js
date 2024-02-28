import { pool } from "../db.js";

export const getIngresos = async (req, res, next) => {
  //obtener perfiles
  const result = await pool.query("SELECT * FROM ingresos");
  return res.json(result.rows);
};

export const getIngreso = async (req, res) => {
  const result = await pool.query("SELECT * FROM ingresos WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun presupuesto con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const createIngreso = async (req, res, next) => {
  const { detalle, tipo, total } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO ingresos (detalle, tipo, total) VALUES ($1, $2, $3) RETURNING *",
      [detalle, tipo, total]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Ya existe un ingreso con ese nombre",
      });
    }
    next(error);
  }
};

export const actualizarIngreso = async (req, res) => {
  const id = req.params.id;
  const { detalle, tipo, total } = req.body;

  const result = await pool.query(
    "UPDATE ingresos SET total = $1 , detalle = $2, tipo = $3 WHERE id = $4",
    [detalle, tipo, total, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe un ingreso con ese id",
    });
  }

  return res.json({
    message: "ingreso actualizado",
  });
};

export const eliminarIngreso = async (req, res) => {
  const result = await pool.query("DELETE FROM ingresos WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun presupuesto con ese id",
    });
  }

  return res.sendStatus(204);
};

export const getIngresoMesActual = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM ingresos WHERE DATE_TRUNC('month', created_at) = DATE_TRUNC('month', CURRENT_DATE)"
    );

    return res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener ingresos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
