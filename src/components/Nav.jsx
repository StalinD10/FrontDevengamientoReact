import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react";

const idDocente = sessionStorage.getItem("idDocente");
const token = sessionStorage.getItem("token");

const useLoaderData = () => {

    const [data, setData] = useState({});
    const loader = async () => {
        try {
            const response1 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_PLAN_DEVENGAMIENTO}/${idDocente}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });
            const data1 = await response1.json();

            setData(data1);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loader();
    }, []);
    return data;
};


function Nav({ children }) {
    const buttonRef = useRef("buttonInsertarPlan");
    const location = useLocation();
    const datos = useLoaderData();


    function cerrarSesion() {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/FrontDevengamientoReact/";
    }

    function redirigir() {
        window.location.href = "/FrontDevengamientoReact/planDevengamiento";
    }


    return (
        <div>

            <div className="contenedor-nav">
                <ul className="nav">
                    <li>
                        <Link className={`${location.pathname === "/FrontDevengamientoReact/datosDocente/:docenteId/" ? "a-stay" : "link-a"} `} to="/FrontDevengamientoReact/datosDocente/${id}"> Datos Docente </Link>

                    </li>
                    <li>
                        <Link className={`${location.pathname === "/FrontDevengamientoReact/planDevengamiento" ? "a-stay" : "link-a"}  `} > Plan devengamiento </Link>
                        <ul>
                            <li>
                                <button disabled={datos.length !== 0} id="buttonInsertarPlan" className="button-cerrar" onClick={redirigir}> Insertar Plan de Devengamiento</button>
                            </li>
                            <li>
                                <Link className={`${location.pathname === "/FrontDevengamientoReact/mostrarPlanes" ? "a-stay" : "link-a"} `} to="/FrontDevengamientoReact/mostrarPlanes"> Mostrar Planes </Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === "/FrontDevengamientoReact/solicitarFiniquito/${id}" ? "a-stay" : "link-a"} `} to="/FrontDevengamientoReact/solicitarFiniquito/${id}"> Solicitar Finiquito </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className={`${location.pathname === "/FrontDevengamientoReact/nuevaActividad" ? "a-stay" : "link-a"} `} >Actividades de Devengamiento </Link>
                        <ul>
                            <li>
                                <Link className={`${location.pathname === "/FrontDevengamientoReact/nuevaActividad" ? "a-stay" : "link-a"} `} to="/FrontDevengamientoReact/nuevaActividad">Agregar Actividad</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === "/FrontDevengamientoReact/mostrarActividades" ? "a-stay" : "link-a"} `} to="/FrontDevengamientoReact/mostrarActividades">Mostrar Actividades </Link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <button className="button-cerrar" onClick={cerrarSesion}>Cerrar Sesión</button>

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav
