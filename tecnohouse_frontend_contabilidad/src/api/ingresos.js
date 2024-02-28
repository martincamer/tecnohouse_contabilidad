import axios from "./axios";

export const crearIngresoNuevo = (data) => axios.post("/ingresos", data);

export const obtenerIngreso = () => axios.get("/ingresos");

export const obtenerIngresoMensual = () => axios.get("/ingresos-mes");

export const editarIngreso = (obtenerParams, data) =>
  axios.put(`/ingresos/${obtenerParams}`, data);

export const obtenerUnicoIngreso = (obtenerParams) =>
  axios.get(`/ingresos/${obtenerParams}`);

export const eliminarIngreso = (id) => axios.delete(`/ingresos/${id}`);
