import { useIngresosContext } from "../../context/IngresosProvider";

export const TablaDeDatos = () => {
  const { ingresoMensual } = useIngresosContext();

  return (
    <div className="h-[70vh] w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px]">
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Numero
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Tipo
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Detalle
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Ingreso
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Total
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Editar
            </th>
            <th className="py-2 px-2 font-normal uppercase text-sm text-indigo-600 text-left">
              Ver
            </th>
          </tr>
        </thead>
        <tbody>
          {ingresoMensual.map((i) => (
            <tr
              key={i.id}
              className="border-b-[1px] hover:bg-slate-100 transition-all ease-in-out duration-200 cursor-pointer"
            >
              <td className="py-3 px-3 text-sm text-left text-slate-700">
                {i.id}
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700 capitalize">
                {i.tipo}
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700 capitalize">
                {i.detalle}
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700">
                {Number(i?.total).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700 font-bold">
                {Number(i?.total).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700">
                <button
                  type="button"
                  className="bg-indigo-500/10 border-[1px] border-indigo-500 py-1 px-3 text-indigo-600 rounded-lg text-left"
                >
                  Editar
                </button>
              </td>
              <td className="py-3 px-3 text-sm text-left text-slate-700">
                <button
                  type="button"
                  className="bg-slate-500/10 border-[1px] border-slate-500 py-1 px-3 rounded-lg text-left text-slate-700"
                >
                  Ver ingreso
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
