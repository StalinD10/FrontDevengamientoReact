import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import NuevoDocente, { action as nuevoDocenteAction } from "./pages/NuevoDocente"
import NuevoPlanDevengamiento, { action as nuevoPlanAction } from './pages/NuevoPlanDevengamiento'
import NuevaActividadDevengamiento, { action as nuevaActividadAction } from './pages/NuevaActividadDevengamiento'
import MostrarPlanes from './components/MostrarPlanes'
import MostrarActividades from './components/MostrarActividades'
import MostrarDatosDocente from './components/MostrarDatosDocente'
import ModalActividadDevengamiento from './components/ModalLayout'
import Login, { action as loginAction } from './pages/Login'
import EditarDocente, { action as editarDocenteAction } from './pages/EditarDocente'
import TiempoDevengamiento, { action as actionTiempoDevengamiento } from './pages/TiempoDevengamiento'
import FiniquitoForm from './components/FiniquitoForm'
import Index from './pages/Index'

const router = createBrowserRouter([{
  path: "/FrontDevengamientoReact/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Login />,
      action: loginAction
    },
    
    {
      path: "/FrontDevengamientoReact/index",
      element: <Index />
    },
    {      
      path: "/FrontDevengamientoReact/plnaDevengamiento",
      element: <NuevoPlanDevengamiento />,
      action: nuevoPlanAction
    },
    {
      path: "/FrontDevengamientoReact/nuevoDocente",
      element: <NuevoDocente />,
      action: nuevoDocenteAction
    },
    {
      path: "/FrontDevengamientoReact/solicitarFiniquito/:docenteId",
      element: <FiniquitoForm />
    },
    
    {
      path: "/FrontDevengamientoReact/tiempoDevengamiento",
      element: <TiempoDevengamiento />,
      action: actionTiempoDevengamiento
    },
    {
      path: "/FrontDevengamientoReact/nuevaActividad",
      element: <NuevaActividadDevengamiento />,
      action: nuevaActividadAction
    },
    
  ]

},
{
  path: "/FrontDevengamientoReact/mostrarPlanes",
  element: <MostrarPlanes />,

},
{
  path: "/FrontDevengamientoReact/mostrarActividades",
  element: <MostrarActividades />

},
{
  path: "/FrontDevengamientoReact/datosDocente/:docenteId/",
  element: <MostrarDatosDocente />,

},
{
  path: "/FrontDevengamientoReact/modalActividad",
  element: <ModalActividadDevengamiento />
},
{
  path: "/FrontDevengamientoReact/docente/:docenteId/editar",
  element: <EditarDocente />,
  action: editarDocenteAction
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
