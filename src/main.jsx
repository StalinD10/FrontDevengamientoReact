import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import NuevoDocente, { action as nuevoDocenteAction } from "./pages/NuevoDocente"
import NuevoPlanDevengamiento, { action as nuevoPlanAction } from './pages/NuevoPlanDevengamiento'
import NuevaActividadDevengamiento, { action as nuevaActividadAction } from './pages/NuevaActividadDevengamiento'
import Index from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/nuevoDocente",
        element: <NuevoDocente />,
        action: nuevoDocenteAction
      },
      {
        path: "/planDevengamiento",
        element: <NuevoPlanDevengamiento />,
        action: nuevoPlanAction
      },
      {
        path: "/nuevaActividad",
        element: <NuevaActividadDevengamiento />,
        action: nuevaActividadAction
      },

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
