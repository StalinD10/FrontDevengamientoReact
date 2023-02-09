import { useLoaderData, redirect } from 'react-router-dom'
import { obtenerPlanes } from '../data/datosPlanDevengamiento'

const idDocente = sessionStorage.getItem("idDocente");

export function loader() {
    const planes = obtenerPlanes(idDocente)
    console.log(planes)
       return planes

}

function MostrarPlanes() {
    const planes = useLoaderData();
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
            <div className="contenedor-table">
                {planes.length ? (
                    <table className="table">
                        <thead className="table-head">
                            <tr className="table-row">
                                <th>Plan</th>
                                <th>Fecha de Inicio</th>
                                <th>Periodo del plan</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {planes.map(plan => (
                                <tr className="table-row">
                                    <td>
                                        {plan.id}
                                    </td>
                                    <td>
                                        {plan.fechaInicio}
                                    </td>
                                    <td>
                                        {plan.periodo}
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                ) : (
                    <p>No existen Docentes registrados</p>
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

export default MostrarPlanes
