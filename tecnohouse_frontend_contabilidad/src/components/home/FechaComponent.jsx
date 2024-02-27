import { useEffect } from "react";
import { useState } from "react";

export const FechaComponent = () => {
  const [dia, setDia] = useState(null);
  const [mes, setMes] = useState(null);

  useEffect(() => {
    const fechaActual = new Date();
    const options = { weekday: "long" };
    const diaActual = fechaActual.toLocaleDateString("es-ES", options);
    const mesActual = fechaActual.toLocaleDateString("es-ES", {
      month: "long",
    });

    setDia(diaActual);
    setMes(mesActual);
  }, []);

  return (
    <div className="bg-slate-500 py-5 px-10 rounded-lg text-white shadow-md shadow-slate-100 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer">
      <p className="font-semibold uppercase">{mes}</p>
      <p className="capitalize">{dia}</p>
    </div>
  );
};
