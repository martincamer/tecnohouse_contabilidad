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
import { ModalCrearTipo } from "../../../components/tipos/ModalCrearTipo";
import { ModalVerTipos } from "../../../components/tipos/ModalVerTipos";
import { useIngresosContext } from "../../../context/IngresosProvider";
import { Link } from "react-router-dom";

export const GenerarDatos = () => {
  const [isOpenEliminar, setIsOpenEliminar] = useState(false);

  const [obtenerId, setObtenerId] = useState("");

  const { setIngresoMensual, ingresoMensual } = useIngresosContext();

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
      <Link
        to={"/"}
        className="absolute flex top-4 text-sm font-bold text-indigo-500 gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        VOLVER
      </Link>
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
        datoUno={ingresoMensual}
        datoDos={setIngresoMensual}
        isOpenEliminar={isOpenEliminar}
        closeModalEliminar={closeModalEliminar}
        obtenerId={obtenerId}
        eliminar={eliminarIngreso}
      />
      <ModalEditarIngreso obtenerId={obtenerIdTwo} />
      <ModalCrearTipo />
      <ModalVerTipos />
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
