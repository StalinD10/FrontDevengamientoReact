import { Outlet, useLocation } from "react-router-dom"
function Layout() {
   
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
