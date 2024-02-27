//imports
import { createContext, useContext, useEffect, useState } from "react";
import {
  obtenerPresupuestoMensual,
  obtenerPresupuestos,
} from "../api/presupuestos";

//context
export const PresupuestosContext = createContext();

//use context
export const usePresupuestosContext = () => {
  const context = useContext(PresupuestosContext);
  if (!context) {
    throw new Error("Use Presupuestos Propvider");
  }
  return context;
};

//
export const PresupuestosProvider = ({ children }) => {
  const [presupuestos, setPresupuestos] = useState([]);
  const [presupuestoMensual, setPresupuestoMensual] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function loadData() {
      const res = await obtenerPresupuestos();

      setPresupuestos(res.data);
    }
    loadData();
  }, []);

  const fechaActual = new Date(); // O utiliza la fecha que necesites
  const nombreMes = fechaActual.toLocaleDateString("es-AR", { month: "long" });

  useEffect(() => {
    async function loadData() {
      const res = await obtenerPresupuestoMensual(nombreMes);

      setPresupuestoMensual(res.data);
    }
    loadData();
  }, []);

  return (
    <PresupuestosContext.Provider
      value={{
        presupuestos,
        isOpen,
        openModal,
        closeModal,
        presupuestoMensual,
      }}
    >
      {children}
    </PresupuestosContext.Provider>
  );
};
