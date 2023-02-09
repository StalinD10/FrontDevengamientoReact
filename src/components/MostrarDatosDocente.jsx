import { useNavigate } from 'react-router-dom'
import { obtenerDocentes, obtenerDatosDevengamiento } from '../data/datosDocente'
import { useState, useEffect } from 'react';

const idDocente = sessionStorage.getItem("idDocente");
const token = sessionStorage.getItem("token");


const useLoaderData = () => {
    const [data, setData] = useState({});
    const loader = async () => {
        try {
            const response1 = await fetch(`${import.meta.env.VITE_API_OBTENER_DOCENTE}/${idDocente}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });
            const data1 = await response1.json();
            
            const response2 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_DEVENGAMIENTO}/${idDocente}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });
            const data2 = await response2.json();
            console.log(data2)
            setData([{ ...data1, ...data2 }]);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loader();
    }, []);
    return data;
};


function MostrarDatosDocente() {
    const datos = useLoaderData();
    const navigate = useNavigate();

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
                {datos.length ? (
                    <table className="table">
                        <caption className="caption">Datos Generales del Docente</caption>
                        <thead className="table-head">
                            <tr className="table-row">
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cédula</th>
                                <th>Categoría del Docente</th>
                                
                                <th>Enlace de Tesis</th>

                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(docente => (
                                <tr className="table-row">
                                    <td>
                                        {docente.nombres === null ? "No disponible" : docente.nombres}
                                    </td>
                                    <td>
                                        {docente.apellidos === null ? "No disponible" : docente.apellidos}
                                    </td>
                                    <td>
                                        {docente.cedula === null ? "No disponible" : docente.cedula}
                                    </td>
                                    <td>
                                        {docente.categoriaDocente === null ? "No disponible" : docente.categoriaDocente}
                                    </td>
                                   
                                    <td>
                                        {docente.enlaceTesis === null ? "No disponible" : docente.enlaceTesis}
                                    </td>
                                </tr>

                            ))}
                        </tbody>

                    </table>

                ) : (
                    <p>No existen Docentes registrados</p>
                )}
            </div>

            <div className="contenedor-table">
                {datos.length ? (
                    <table className="table">
                        <caption className="caption">Datos de devengamiento del Docente</caption>
                        <thead className="table-head">
                            <tr className="table-row">

                                <th>Estado Docente</th>
                                <th>Fecha de lectura de tesis</th>
                                <th>Fecha de reintegro</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(docente => (
                                <tr className="table-row">


                                    <td>
                                        {docente.estadoDocente === null ? "No disponible" : docente.estadoDocente}
                                    </td>
                                    <td>
                                        {docente.fechaLecturaTesis === null ? "No disponible" : docente.fechaLecturaTesis}
                                    </td>
                                    <td>
                                        {docente.fechaReintegro === null ? "No disponible" : docente.fechaReintegro}
                                    </td>
                                    <td>
                                        <button onClick={() => navigate(`/docente/${idDocente}/editar`)} className='button-form'>Editar</button>
                                    </td>

                                </tr>

                            ))}
                        </tbody>
                        <thead className="table-head">
                            <tr className="table-row">
                                <th>Modalidad</th>
                                <th>REDI-CEDIA</th>
                                <th>RNI Senesyt</th>
                                <th>Facultad</th>


                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(docente => (
                                <tr className="table-row">
                                    <td>
                                        {docente.modalidad === null ? "No disponible" : docente.modalidad}
                                    </td>
                                    <td>
                                        {docente.rediCedia ? "Si" : "No"}
                                    </td>
                                    <td>
                                        {docente.rniSenesyt ? "Si" : "No"}
                                    </td>
                                    <td>
                                        {docente.facultad === null ? "No disponible" : docente.facultad}
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

export default MostrarDatosDocente



