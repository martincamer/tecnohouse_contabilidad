import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import { useIngresosContext } from "../../context/IngresosProvider";
import { usePresupuestosContext } from "../../context/PresupuestosProvider";

const convertirFecha = (fecha) => {
  return moment(fecha).format("YYYY-MM-DD HH:mm:ss");
};

const formatoMoneda = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

const formatoNumero = new Intl.NumberFormat("es-AR");

export const ChartComponentTwo = () => {
  const { ingresoMensual } = useIngresosContext();
  const { presupuestoMensual } = usePresupuestosContext();

  const datosFormateados = ingresoMensual.map((item) => {
    console.log("Valor original:", item.total);
    return {
      ...item,
      created_at: convertirFecha(item.created_at),
      total: item.total,
    };
  });

  console.log(presupuestoMensual);
  console.log(ingresoMensual);

  return (
    <BarChart
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
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip formatter={(value) => formatoMoneda.format(Number(value))} />
      <Legend />
      <Bar
        dataKey="total"
        name="Gastos mensuales (Moneda)"
        fill="#6366f1"
        yAxisId="left"
        label={({ payload }) => `${payload?.detalle}`}
      ></Bar>
      {/* Puedes agregar más barras según tus necesidades */}
    </BarChart>
  );
};
