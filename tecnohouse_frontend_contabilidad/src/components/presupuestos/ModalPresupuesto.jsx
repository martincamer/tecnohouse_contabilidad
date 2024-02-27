import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { usePresupuestosContext } from "../../context/PresupuestosProvider";
import { ModalCrearTotal } from "./ModalCrearTotal";

export const ModalPresupuesto = () => {
  const { isOpen, closeModal, presupuestos } = usePresupuestosContext();

  const [isOpenCrear, setIsOpenCrear] = useState(false);

  const openModalCrear = () => {
    setIsOpenCrear(true);
  };

  const closeModalCrear = () => {
    setIsOpenCrear(false);
  };

  return (
    <Menu as="div" className="z-50">
      <ToastContainer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-1/2 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="space-y-3">
                  <p className="text-indigo-700">INGRESE UN PRESUPUESTO</p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => openModalCrear()}
                    className="bg-indigo-500 text-white text-sm py-1 px-4 rounded-lg shadow"
                  >
                    Crear nuevo valor
                  </button>
                </div>
                <div className="bg-slate-100 border-lg px-2 py-3 rounded-lg shadow shadow-gray-400 mt-5">
                  <p className="font-semibold text-indigo-500 text-lg">
                    Presupuestos creados del mes
                  </p>
                  <div className="my-5">
                    {presupuestos?.map((p) => (
                      <p className="font-bold text-slate-700">
                        TOTAL:{" "}
                        <span className="text-indigo-500 font-normal">
                          {Number(p?.total).toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                          })}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300 cursor-pointer max-md:text-xs"
                    onClick={closeModal}
                  >
                    Cerrar Ventana
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
          <ModalCrearTotal
            isOpenCrear={isOpenCrear}
            openModalCrear={openModalCrear}
            closeModalCrear={closeModalCrear}
          />
        </Dialog>
      </Transition>
    </Menu>
  );
};
