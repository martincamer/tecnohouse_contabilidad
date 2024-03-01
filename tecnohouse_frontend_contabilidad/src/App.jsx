//import {}
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { NotFound } from "./routes/pages/protected/NotFound";
import { Login } from "./routes/pages/Login";
import { Register } from "./routes/pages/Register";
import { Home } from "./routes/pages/protected/Home";
import { SideBar } from "./components/sidebar/Sidebar";
import { GenerarDatos } from "./routes/pages/protected/GenerarDatos";
import { PresupuestosProvider } from "./context/PresupuestosProvider";
import { IngresosProvider } from "./context/IngresosProvider";
import { TiposProvider } from "./context/TiposProvider";
import { ViewPdf } from "./components/pdf/ViewPdf";
import { GenerarRecibos } from "./routes/pages/protected/GenerarRecibos";
import { Cuenta } from "./routes/pages/protected/Cuenta";
import { Estadistica } from "./routes/pages/protected/Estadistica";
import { GenerarRecibosEstadistica } from "./routes/pages/protected/GenerarRecibosEstadistica";
//import normales
import RutaProtegida from "./layouts/RutaProtejida";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { NavbarStatick } from "./components/ui/NavbarStatick";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <NavbarStatick />
        <Routes>
          <Route
            element={<RutaProtegida isAllowed={!isAuth} redirectTo={"/pm"} />}
          >
            <Route index path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route
            element={<RutaProtegida isAllowed={isAuth} redirectTo={"/login"} />}
          >
            <Route
              element={
                <PresupuestosProvider>
                  <IngresosProvider>
                    <TiposProvider>
                      <main className="flex gap-2 h-full">
                        <SideBar />
                        <Outlet />
                      </main>
                    </TiposProvider>
                  </IngresosProvider>
                </PresupuestosProvider>
              }
            >
              <Route index path="/" element={<Home />} />
              <Route path="/generar-datos" element={<GenerarDatos />} />
              <Route path="/generar-recibos" element={<GenerarRecibos />} />
              <Route path="/estadistica" element={<Estadistica />} />
              <Route
                path="/estadistica-recibos"
                element={<GenerarRecibosEstadistica />}
              />
              <Route path="/cuenta" element={<Cuenta />} />
              <Route path="/view-pdf" element={<ViewPdf />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
