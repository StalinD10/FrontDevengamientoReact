import { Link, useLocation } from "react-router-dom"
function Nav({children}) {
    
    const location = useLocation();

    return (
        <div>
            <div className="contenedor-nav">
                <ul className="nav">
                    <li>
                        <Link className={`${location.pathname === "/datosDocente/:docenteId/" ? "a-stay" : "link-a"} not-active `} to="/datosDocente/${id}"> Datos Docente </Link>
                       
                    </li>
                    <li>
                        <Link className={`${location.pathname === "/planDevengamiento" ? "a-stay" : "link-a"} not-active `} > Plan devengamiento </Link>
                        <ul>
                            <li>
                                <Link className={`${location.pathname === "/planDevengamiento" ? "a-stay" : "link-a"} not-active`} to="/planDevengamiento"> Insertar Plan de Devengamiento</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === "/mostrarPlanes" ? "a-stay" : "link-a"} not-active`} to="/mostrarPlanes/${id}"> Mostrar Planes </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className={`${location.pathname === "/nuevaActividad" ? "a-stay" : "link-a"} `} >Actividades de Devengamiento </Link>
                        <ul>
                            <li>
                                <Link className={`${location.pathname === "/nuevaActividad" ? "a-stay" : "link-a"} `} to="/nuevaActividad">Agregar Actividad</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === "/mostrarActividades" ? "a-stay" : "link-a"} `} to="/mostrarActividades">Mostrar Actividades </Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Nav
