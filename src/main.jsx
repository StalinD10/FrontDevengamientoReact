import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import NuevoDocente, { action as nuevoDocenteAction } from "./pages/NuevoDocente"
import NuevoPlanDevengamiento, { action as nuevoPlanAction } from './pages/NuevoPlanDevengamiento'
import NuevaActividadDevengamiento, { action as nuevaActividadAction } from './pages/NuevaActividadDevengamiento'
import MostrarPlanes  from './components/MostrarPlanes'
import MostrarActividades from './components/MostrarActividades'
import MostrarDatosDocente from './components/MostrarDatosDocente'
import ModalActividadDevengamiento from './components/ModalLayout'
import Login, {action as loginAction} from './pages/Login'
import EditarDocente, { action as editarDocenteAction} from './pages/EditarDocente'
import TiempoDevengamiento, {action as actionTiempoDevengamiento} from './pages/TiempoDevengamiento'
import FiniquitoForm from './components/FiniquitoForm'
import Index from './pages/Index'
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction
      },
      {
        path: "/index",
        element: <Index/>
      },
      {
        path: "/nuevoDocente",
        element: <NuevoDocente />,
        action: nuevoDocenteAction
      },
      {
        path: "/solicitarFiniquito/:docenteId",
        element: <FiniquitoForm />
      },
      {
        path: "/planDevengamiento",
        element: <NuevoPlanDevengamiento />,
        action: nuevoPlanAction
      },
      {
        path: "/tiempoDevengamiento",
        element: <TiempoDevengamiento />,
        action: actionTiempoDevengamiento
      },
      {
        path: "/nuevaActividad",
        element: <NuevaActividadDevengamiento />,
        action: nuevaActividadAction
      }
      
    ]

  },
  
  {
    path: "/mostrarPlanes",
    element: <MostrarPlanes />,
   
  },
  {
    path: "/mostrarActividades",
    element: <MostrarActividades />
    
  },
  {
    path: "/datosDocente/:docenteId/",
    element: <MostrarDatosDocente />,
    
  },
  {
    path: "/modalActividad",
    element: <ModalActividadDevengamiento />
  },
  {
    path: "/docente/:docenteId/editar",
    element: <EditarDocente />,
    action: editarDocenteAction
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
