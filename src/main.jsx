import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import NuevoDocente, { action as nuevoDocenteAction } from "./pages/NuevoDocente"
import Index from './pages'
import PlanDevengamiento from './pages/PlanDevengamiento'
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
        element: <PlanDevengamiento />
      },

    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
