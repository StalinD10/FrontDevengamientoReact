import { Outlet, Link, useLocation } from "react-router-dom"
function Layout() {
   const location = useLocation();
  return (
    <div>
      <header>
        <header className="header">
          <div className="contenedor">
            <div className="textos-header">
              <h1>
                Seguimiento de devengamiento a doctorados
              </h1>
              <p className="texto-universidad">
                UNIVERSIDAD CENTRAL DEL ECUADOR
              </p>
            </div>

          </div>
        </header>
      </header>
      <div className="contenedor-nav">
        <ul className="nav">
          <li>
          <Link className={`${location.pathname === "/datosDocente/:docenteId/"  ? "a-stay" : "link-a"} not-active `} to= "datosDocente/${id}"> Datos Docente </Link>
          </li>
          <li>
            <Link className={`${location.pathname === "/planDevengamiento"  ? "a-stay" : "link-a"} not-active `} > Plan devengamiento </Link>
            <ul>
              <li>
                <Link className={`${location.pathname === "/planDevengamiento" ? "a-stay" : "link-a"} not-active`} to="planDevengamiento"> Insertar Plan de Devengamiento</Link>
              </li>
              <li>
                <Link className={`${location.pathname === "/mostrarPlanes" ? "a-stay" : "link-a"} not-active`} to="mostrarPlanes/${id}"> Mostrar Planes </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className={`${location.pathname === "/nuevaActividad" ? "a-stay" : "link-a"} `} >Actividades de Devengamiento </Link>
            <ul>
              <li>
              <Link className={`${location.pathname === "/nuevaActividad" ? "a-stay" : "link-a"} `} to="nuevaActividad">Agregar Actividad</Link>   
              </li>
              <li>
              <Link className={`${location.pathname === "/mostrarActividades" ? "a-stay" : "link-a"} `} to="mostrarActividades">Mostrar Actividades </Link>
              </li>
            </ul>
          </li>
                    
        </ul>
      </div>
      <Outlet />
      <footer>
        <div className="footer">
          <div className="contenedor">
            <div className="texto-footer">
              <p className="texto-copy">
                Copyright &copy 2022 Universidad Central del Ecuador
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
