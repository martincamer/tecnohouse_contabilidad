import { usePresupuestosContext } from "../../context/PresupuestosProvider";

export const Categorias = () => {
  const { openModal } = usePresupuestosContext();

  return (
    <div className="bg-white w-full py-4 px-6 border-[1px] border-slate-300 shadow-md rounded-lg flex gap-4">
      <div>
        <button
          className="bg-indigo-500 text-white py-2 px-5 rounded-lg text-sm"
          type="button"
        >
          Ingreso nuevo
        </button>
      </div>

      <div>
        <button
          className="bg-indigo-500 text-white py-2 px-5 rounded-lg text-sm"
          type="button"
        >
          Crear tipo de gasto
        </button>
      </div>
      <div>
        <button
          className="bg-indigo-500 text-white py-2 px-5 rounded-lg text-sm"
          type="button"
        >
          Editar tipo de gasto
        </button>
      </div>
      <div>
        <button
          className="bg-slate-700 text-white py-2 px-5 rounded-lg text-sm"
          type="button"
        >
          Descargar o imprimir
        </button>
      </div>
      <div>
        <button
          onClick={() => openModal()}
          className="bg-slate-700 text-white py-2 px-5 rounded-lg text-sm"
          type="button"
        >
          Total del presupuesto
        </button>
      </div>
    </div>
  );
};
