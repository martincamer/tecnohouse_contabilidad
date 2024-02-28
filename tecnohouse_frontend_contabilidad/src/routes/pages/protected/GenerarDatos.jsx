import { Buscador } from "../../../components/generarDatos/Buscador";
import { Categorias } from "../../../components/generarDatos/Categorias";
import { IntroActual } from "../../../components/generarDatos/IntroActual";
import { TablaDeDatos } from "../../../components/generarDatos/TablaDeDatos";
import { ModalNuevoIngreso } from "../../../components/ingresos/ModalIngresoNuevo";
import { ModalPresupuesto } from "../../../components/presupuestos/ModalPresupuesto";

export const GenerarDatos = () => {
  return (
    <section className="px-10 py-16 w-full h-full flex flex-col gap-5">
      <IntroActual />
      <Categorias />
      <div>
        <Buscador />
      </div>
      <TablaDeDatos />

      <ModalPresupuesto />
      <ModalNuevoIngreso />
      <div>
        <button
          type="button"
          className="bg-indigo-500/10 border-indigo-500 text-indigo-600 rounded-lg border-[1px] px-4 py-1"
        >
          Imprimir todo
        </button>
      </div>
    </section>
  );
};
