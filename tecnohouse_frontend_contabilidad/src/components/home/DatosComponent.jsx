export const DatosComponent = ({ title, total }) => {
  return (
    <div className="bg-indigo-500 py-5 px-10 rounded-lg text-white shadow-md shadow-slate-100 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer">
      <p className="font-semibold">{title}</p>
      <p>{total}</p>
    </div>
  );
};
