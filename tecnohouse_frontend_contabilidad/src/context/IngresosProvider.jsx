//imports
import { createContext, useContext, useEffect, useState } from "react";
import {
  obtenerPresupuestoMensual,
  obtenerPresupuestos,
} from "../api/presupuestos";
import { obtenerIngreso, obtenerIngresoMensual } from "../api/ingresos";

//context
export const IngresosContext = createContext();

//use context
export const useIngresosContext = () => {
  const context = useContext(IngresosContext);
  if (!context) {
    throw new Error("Use Ingresos Propvider");
  }
  return context;
};

//
export const IngresosProvider = ({ children }) => {
  const [ingresos, setIngresos] = useState([]);
  const [ingresoMensual, setIngresoMensual] = useState([]);
  const [isOpenIngresos, setIsOpenIngresos] = useState(false);

  const openModalIngresos = () => {
    setIsOpenIngresos(true);
  };

  const closeModalIngresos = () => {
    setIsOpenIngresos(false);
  };

  useEffect(() => {
    async function loadData() {
      const res = await obtenerIngreso();

      setIngresos(res.data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await obtenerIngresoMensual();
        setIngresoMensual(res.data);
      } catch (error) {
        console.error("Error fetching data:", error.response.data);
        // Handle the error (e.g., display an error message)
      }
    }
    loadData();
  }, []); // Include nombreMes in the dependency array if it changes.

  return (
    <IngresosContext.Provider
      value={{
        isOpenIngresos,
        openModalIngresos,
        closeModalIngresos,
        ingresoMensual,
      }}
    >
      {children}
    </IngresosContext.Provider>
  );
};
