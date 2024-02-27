import { pool } from "../db.js";

export const getIngresos = async (req, res, next) => {
  //obtener perfiles
  const result = await pool.query("SELECT * FROM ingresos WHERE id = $1", [
    req.id,
  ]);
  return res.json(result.rows);
};

export const getIngreso = async (req, res) => {
  const result = await pool.query("SELECT * FROM ingresos WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun ingreso con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const createIngreso = async (req, res, next) => {
  const { detalle, tipo, numero, total } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO ingresos (detalle, tipo ,total , user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [detalle, tipo, numero, total, req.id]
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
  const { detalle, tipo, numero, total } = req.body;

  const result = await pool.query(
    "UPDATE ingresos SET detalle = $1, tipo = $2 ,numero = $3, total = $4 WHERE id = $5",
    [detalle, tipo, numero, total, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe un gasto con ese id",
    });
  }

  return res.json({
    message: "gasto actualizado",
  });
};

export const eliminarGasto = async (req, res) => {
  const result = await pool.query("DELETE FROM ingresos WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun gasto con ese id",
    });
  }

  return res.sendStatus(204);
};

export const getIngresosDelMes = async (req, res, next) => {
  // Obtener la fecha de inicio y fin del mes actual
  const fechaInicioMes = new Date();
  fechaInicioMes.setDate(1);
  fechaInicioMes.setHours(0, 0, 0, 0);

  const fechaFinMes = new Date();
  fechaFinMes.setMonth(fechaFinMes.getMonth() + 1, 0);
  fechaFinMes.setHours(23, 59, 59, 999);

  // Consulta SQL para obtener los gastos del mes actual
  const result = await pool.query(
    "SELECT * FROM ingresos WHERE id = $1 AND created_at BETWEEN $2 AND $3",
    [req.id, fechaInicioMes, fechaFinMes]
  );

  return res.json(result.rows);
};
