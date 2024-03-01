import { PDFViewer } from "@react-pdf/renderer";

import { usePresupuestosContext } from "../../context/PresupuestosProvider";
import { useIngresosContext } from "../../context/IngresosProvider";
import { ImprimirEstadisticaPdf } from "./ImprirmirEstadisticaPdf";
// import { ImprimirPdf } from "./ImprirmirPdf";

export const ViewPdf = ({}) => {
  const { presupuestoMensual } = usePresupuestosContext();
  const { ingresoMensual } = useIngresosContext();

  // Consolidar ingresos por tipo y sumar los totales
  const ingresosConsolidados = ingresoMensual.reduce((consolidado, ingreso) => {
    if (!consolidado[ingreso.tipo]) {
      consolidado[ingreso.tipo] = {
        tipo: ingreso.tipo,
        total: 0,
      };
    }
    consolidado[ingreso.tipo].total += parseInt(ingreso.total, 10);
    return consolidado;
  }, {});

  const totalGlobal = Object.values(ingresosConsolidados).reduce(
    (total, ingreso) => total + ingreso.total,
    0
  );

  // Distribuir el total global en porcentajes
  // const porcentajeDistribucion = 0.4; // 40%
  const ingresosDistribuidos = Object.values(ingresosConsolidados).map(
    (ingreso) => ({
      ...ingreso,
      porcentaje: ingreso.total / totalGlobal /** porcentajeDistribucion*/,
    })
  );

  // Calculamos los ingresos por tipo
  const ingresosPorTipo = ingresoMensual.reduce((acumulador, ingreso) => {
    const tipo = ingreso.tipo;
    const total = parseInt(ingreso.total, 10);

    if (!acumulador[tipo]) {
      acumulador[tipo] = 0;
    }

    acumulador[tipo] += total;

    return acumulador;
  }, {});

  // Calculamos el total de ingresos mensuales
  const ingresoMensualTotal = Object.values(ingresosPorTipo).reduce(
    (total, tipoTotal) => {
      return total + tipoTotal;
    },
    0
  );

  const presupuestoMensualTotal = presupuestoMensual.reduce(
    (total, presupuesto) => total + parseInt(presupuesto.total, 10),
    0
  );

  // Calculamos la diferencia por tipo
  const diferenciaPorTipo = Object.entries(ingresosPorTipo).map(
    ([tipo, totalIngresoTipo]) => {
      const totalPresupuestoTipo =
        (totalIngresoTipo / ingresoMensualTotal) * presupuestoMensualTotal;
      const diferencia = totalPresupuestoTipo - totalIngresoTipo;

      return { tipo, diferencia };
    }
  );

  console.log("Diferencia por tipo:", diferenciaPorTipo);

  console.log(ingresosDistribuidos);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <ImprimirEstadisticaPdf
        presupuestoMensual={presupuestoMensual}
        ingresoMensual={ingresosDistribuidos}
        diferenciaPorTipo={diferenciaPorTipo}
      />
    </PDFViewer>
  );
};
