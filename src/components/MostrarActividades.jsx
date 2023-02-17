import { useState, useEffect } from 'react';
import Nav from './Nav';
const token = sessionStorage.getItem("token");
const idDocente = sessionStorage.getItem("idDocente");
const useLoaderData = () => {

    const [data, setData] = useState({});
    const loader = async () => {
        try {
            const response2 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_PLAN_DEVENGAMIENTO}/${idDocente}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });
            const data2 = await response2.json();
            const ultimoObjeto = data2[data2.length -1];
            const idPlan= ultimoObjeto.id;
            const response1 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_ACTIVIDAD_DEVENGAMIENTO}/${idPlan}`, {
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
function MostrarActividades() {
    const datos = useLoaderData();

    return (
        <div>

            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
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
            <Nav />
            <div className="contenedor-table">
                {datos.length ? (
                    <table className="table">

                        <caption className="caption">Actividades de devengamiento</caption>
                        <thead className="table-head">
                            <tr className="table-row">
                                <th>Actividad</th>
                                <th>Fecha de Inicio</th>
                                <th>Fecha de Finalización</th>
                                <th>Detalle de la actividad</th>
                                <th>Tipo de Actividad</th>
                                <th>Link de la evidencia</th>
                                <th>Periodo Actual</th>
                                <th>Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(actividad => (
                                <tr className="table-row">
                                    <td>
                                        {actividad.id}
                                    </td>
                                    <td>
                                        {actividad.fechaInicioActividad}
                                    </td>
                                    <td>
                                        {actividad.fechaFinActividad}
                                    </td>
                                    <td>
                                        {actividad.descripcionActividad}
                                    </td>
                                    <td>
                                        {actividad.tipoActividades[0].nombreTipoActividad}
                                    </td>
                                    <td>
                                        {actividad.evidenciasLink}
                                    </td>
                                    <td>
                                        {actividad.idPlanDevengamiento.periodo}
                                    </td>
                                    <td>
                                        {actividad.idPlanDevengamiento.id}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='p-informacion'> No existen Actividades Registradas</p>
                )}
            </div>
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

export default MostrarActividades
