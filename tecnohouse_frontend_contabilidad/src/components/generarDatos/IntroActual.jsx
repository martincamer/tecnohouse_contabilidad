import { usePresupuestosContext } from "../../context/PresupuestosProvider";

export const IntroActual = () => {
  const { presupuestoMensual } = usePresupuestosContext();

  console.log(presupuestoMensual);

  return (
    <div className="bg-slate-300 w-full py-10 px-6 border-[1px] border-slate-300 shadow-sm shadow-slate-400 rounded-lg flex gap-4 items-center">
      <div className="bg-white px-4 py-2 rounded-lg shadow flex flex-col gap-1 w-full h-full">
        <p className="text-indigo-500 text-sm">Total del presupuesto</p>
        {presupuestoMensual.map((p) => (
          <p className="text-slate-700 text-sm font-semibold">
            {Number(p?.total).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
        ))}
      </div>

      <div className="bg-white px-4 py-2 rounded-lg shadow flex flex-col gap-1 w-full h-full">
        <p className="text-indigo-500 text-sm">
          Gastos del mes enero / viernes
        </p>
        <p className="text-slate-700 text-sm font-semibold">
          Total: $105.000.000
        </p>
        <p className="text-slate-700 text-sm font-semibold">Cant: 15</p>
      </div>

      <div className="bg-white px-4 py-2 rounded-lg shadow flex flex-col gap-1 w-full h-full">
        <p className="text-indigo-500 text-sm">Ingreso final</p>
        <p className="text-slate-700 text-sm font-semibold">$105.000.000</p>
      </div>
    </div>
  );
};
