import { useState } from "react";
import { Buscador } from "../../../components/generarDatos/Buscador";
import { Categorias } from "../../../components/generarDatos/Categorias";
import { IntroActual } from "../../../components/generarDatos/IntroActual";
import { TablaDeDatos } from "../../../components/generarDatos/TablaDeDatos";
import { ModalNuevoIngreso } from "../../../components/ingresos/ModalIngresoNuevo";
import { ModalPresupuesto } from "../../../components/presupuestos/ModalPresupuesto";
import { ModalEliminar } from "../../../components/ui/ModalEliminar";
import { eliminarIngreso } from "../../../api/ingresos";
import { ModalEditarIngreso } from "../../../components/ingresos/ModalEditarIngreso";

export const GenerarDatos = () => {
  const [isOpenEliminar, setIsOpenEliminar] = useState(false);

  const [obtenerId, setObtenerId] = useState("");

  const openModalEliminar = () => {
    setIsOpenEliminar(true);
  };

  const closeModalEliminar = () => {
    setIsOpenEliminar(false);
  };

  const handleId = (id) => {
    setObtenerId(id);
  };

  const [obtenerIdTwo, setObtenerIdTwo] = useState([]);

  return (
    <section className="px-10 py-16 w-full h-full flex flex-col gap-5">
      <IntroActual />
      <Categorias />
      <div>
        <Buscador />
      </div>
      <TablaDeDatos
        setObtenerIdTwo={setObtenerIdTwo}
        openModalEliminar={openModalEliminar}
        handleId={handleId}
      />

      <ModalPresupuesto />
      <ModalNuevoIngreso />
      <ModalEliminar
        isOpenEliminar={isOpenEliminar}
        closeModalEliminar={closeModalEliminar}
        obtenerId={obtenerId}
        eliminar={eliminarIngreso}
      />
      <ModalEditarIngreso obtenerId={obtenerIdTwo} />
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
