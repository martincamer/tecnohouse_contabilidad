import { pool } from "../db.js";

export const getPresupuestos = async (req, res, next) => {
  //obtener perfiles
  const result = await pool.query("SELECT * FROM presupuesto");
  return res.json(result.rows);
};

export const getPresupuesto = async (req, res) => {
  const result = await pool.query("SELECT * FROM presupuesto WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun presupuesto con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const createPresupuesto = async (req, res, next) => {
  const { total } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO presupuesto (total) VALUES ($1) RETURNING *",
      [total]
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

export const actualizarPresupuesto = async (req, res) => {
  const id = req.params.id;
  const { total } = req.body;

  const result = await pool.query(
    "UPDATE presupuesto SET total = $1 WHERE id = $2",
    [total, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe un presupuesto con ese id",
    });
  }

  return res.json({
    message: "presupuesto actualizado",
  });
};

export const eliminarGasto = async (req, res) => {
  const result = await pool.query("DELETE FROM presupuesto WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe ningun presupuesto con ese id",
    });
  }

  return res.sendStatus(204);
};

export const getPresupuestoDelMes = async (req, res, next) => {
  // Obtener la fecha de inicio y fin del mes actual
  const fechaInicioMes = new Date();
  fechaInicioMes.setDate(1);
  fechaInicioMes.setHours(0, 0, 0, 0);

  const fechaFinMes = new Date();
  fechaFinMes.setMonth(fechaFinMes.getMonth() + 1, 0);
  fechaFinMes.setHours(23, 59, 59, 999);

  // Consulta SQL para obtener los gastos del mes actual
  const result = await pool.query(
    "SELECT * FROM presupuesto WHERE id = $1 AND created_at BETWEEN $2 AND $3",
    [req.id, fechaInicioMes, fechaFinMes]
  );

  return res.json(result.rows);
};