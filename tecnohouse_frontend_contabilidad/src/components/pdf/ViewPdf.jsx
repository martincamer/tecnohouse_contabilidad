import { PDFViewer } from "@react-pdf/renderer";

import { usePresupuestosContext } from "../../context/PresupuestosProvider";
import { useIngresosContext } from "../../context/IngresosProvider";
import { ImprimirPdf } from "./ImprirmirPdf";

export const ViewPdf = ({}) => {
  const { presupuestoMensual } = usePresupuestosContext();
  const { ingresoMensual } = useIngresosContext();

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <ImprimirPdf
        presupuestoMensual={presupuestoMensual}
        ingresoMensual={ingresoMensual}
      />
    </PDFViewer>
  );
};
