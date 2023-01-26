import { Outlet, Link, useLocation } from "react-router-dom"
function Layout() {
  const location = useLocation();
  return (
    <div>
      <header>
        <header className="header">
          <div className="contenedor">
            <div className="textos-header">
              <h1 className="texto-h1">
                Seguimiento de devengamiento a doctorados
              </h1>
              <p className="texto-universidad">
                UNIVERSIDAD CENTRAL DEL ECUADOR
              </p>
            </div>

          </div>
        </header>
      </header>
      <div className="nav">
        <Link className={`${location.pathname === "/PlanDevengamiento" ? "a-stay" : "link-a"} link `} to="PlanDevengamiento"> Plan Devengamiento </Link>
        <Link className={`${location.pathname === "/ActividadDevengamiento" ? "a-stay" : "link-a"} not-active`} to="/actividadDevengamiento.html">Actividad de Devengamiento </Link>
        <Link className={`${location.pathname === "" ? "a-stay" : "link-a"}`} to="#">Devengamiento</Link>
        <Link className={`${location.pathname === "" ? "a-stay" : "link-a"}`} to="#">Información</Link>
        <Link className={`${location.pathname === "/" ? "a-stay" : "link-a"}`} to="#">Ver actividades de devengamiento</Link>
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
