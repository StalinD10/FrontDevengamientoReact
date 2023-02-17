import Nav from './Nav';
import { useState, useEffect } from 'react';


const idPlan = sessionStorage.getItem("idPlan");
const token = sessionStorage.getItem("token");
const idDocente = sessionStorage.getItem("idDocente");

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
            <Nav/>
            <div className="contenedor-table">
                {planes.length ? (
                    <table className="table">
                        <caption className="caption">Planes de devengamiento</caption>
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
                                        {plan.numeroPlan}
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
                    <p className='p-informacion'>No existen planes registrados</p>
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
