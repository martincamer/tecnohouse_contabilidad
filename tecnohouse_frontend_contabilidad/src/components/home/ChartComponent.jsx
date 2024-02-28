import React, { useEffect, useRef } from "react";
import { usePresupuestosContext } from "../../context/PresupuestosProvider";
import { useIngresosContext } from "../../context/IngresosProvider";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import moment from "moment"; // Importa la biblioteca moment para el formateo de fechas

const convertirFecha = (fecha) => {
  return moment(fecha).format("YYYY-MM-DD HH:mm:ss");
};

const formatoMoneda = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export const ChartComponent = () => {
  const { ingresoMensual } = useIngresosContext();

  const datosFormateados = ingresoMensual.map((item) => {
    console.log("Valor original:", item.total);
    return {
      ...item,
      created_at: convertirFecha(item.created_at),
      total: item.total,
    };
  });

  console.log(datosFormateados);

  return (
    <LineChart
      width={1220}
      height={500}
      style={{
        padding: "20px 10px",
        margin: "0 auto",
        cursor: "pointer",
      }}
      data={datosFormateados}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="created_at" />
      <YAxis />
      <Tooltip formatter={(value) => formatoMoneda.format(Number(value))} />
      <Legend />
      <Line
        type="monotone"
        dataKey="total"
        name="Gastos mensuales (Moneda)"
        stroke="#6366f1"
      />
      {/* Puedes agregar más líneas según tus necesidades */}
    </LineChart>
  );
};
