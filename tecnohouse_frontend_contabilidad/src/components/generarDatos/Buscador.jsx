import { useIngresosContext } from "../../context/IngresosProvider";

export const Buscador = () => {
  const { handleBusquedaChange, busqueda } = useIngresosContext();
  return (
    <input
      value={busqueda}
      onChange={handleBusquedaChange}
      className="w-1/4 bg-slate-100 py-2 px-3 rounded-lg shadow shadow-slate-300 border-[1px] border-slate-300 placeholder:text-slate-500 text-sm outline-none"
      placeholder="Buscar por el codigo o el detalle"
    />
  );
};
