import { DatosComponent } from "../../../components/home/DatosComponent";
import { FechaComponent } from "../../../components/home/FechaComponent";

export const Home = () => {
  const fechaActual = new Date();
  const numeroMesActual = fechaActual.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11

  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const nombreMesActual = nombresMeses[numeroMesActual - 1];

  return (
    <section className="w-full py-12 px-12 max-md:px-4 flex flex-col gap-20">
      <div className="grid grid-cols-5 gap-4 border-[1px] shadow-md rounded py-5 px-10">
        <DatosComponent title="Total cargados" total={"15"} />
        <DatosComponent title="Total final" total={"$100.000.000"} />
        <FechaComponent />
        <DatosComponent title="Total del presupuesto" total={"$130.000.000"} />
        <DatosComponent title="Total Gastos" total={"$105.000.000"} />
      </div>
    </section>
  );
};
