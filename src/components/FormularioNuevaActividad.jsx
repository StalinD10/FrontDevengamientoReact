
import ModalActividadDevengamiento from './ModalLayout';
import { useEffect, useState } from "react";
import Nav from "../components/Nav"

const token = sessionStorage.getItem("token");


function FormularioNuevaActividad({ }) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [valorSelectModal, setValorSelectModal] = useState("");
    const [valorSelectUniversidad, setvalorSelectUniversidad] = useState("");
    const [valorSelectFacultad, setvalorSelectFacultad] = useState(1)
    const [valorSelectCarrera, setvalorSelectCarrera] = useState("");
    const [data, setData] = useState([]);
    const [dataFacultades, setDataFacultades] = useState([]);
    const [actividadID, setActividadID] = useState([]);
    const [actividadDocente, setActividadDocente] = useState([]);
    const [actividadInnovacion, setActividadInnovacion] = useState([]);
    const [actividadInvestigadora, setActividadInvestigadora] = useState([]);
    const [tipoActividad, setTipoActividad] = useState([]);
    const [selectedOption, setselectedOption] = useState("");
    const [valorOtraInstitucion, setvalorOtraInstitucion] = useState("");
    const [valorDetalleActividadDocente, setvalorDetalleActividadDocente] = useState("");

    function handleChange(event) {
        setValorSelectModal(event.target.value);
        setvalorSelectUniversidad(event.target.value);
        setvalorSelectFacultad(event.target.value);
        setvalorSelectCarrera(event.target.value);
        setselectedOption(event.target.value);
    }
    function handleChange2(event) {
        setvalorDetalleActividadDocente(event.target.value)
        setvalorOtraInstitucion(event.target.value)
    }

    function handleChange3(event) {
        setvalorDetalleActividadDocente(event.target.value)

    }
    let idFacultad = valorSelectFacultad;
    localStorage.setItem("idFacultad", idFacultad);

    useEffect(() => {
        const peticion = async () => {
            let idFacultad = localStorage.getItem("idFacultad")
            try {

                const response = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_FACULTAD}/1`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data1 = await response.json();
                setDataFacultades(data1);

                const response2 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_CARRERA}/${idFacultad}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data2 = await response2.json();
                setData(data2);
                setselectedOption(data2[0].value);

                const response3 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_ACTIVIDAD_ID}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data3 = await response3.json();
                setActividadID(data3);


                const response4 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_ACTIVIDAD_DOCENTE}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data4 = await response4.json();
                setActividadDocente(data4);


                const response5 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_ACTIVIDAD_INVESTIGADORA}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data5 = await response5.json();
                setActividadInvestigadora(data5);


                const response6 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_ACTIVIDAD_INNOVACION}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data6 = await response6.json();
                setActividadInnovacion(data6);

                const response7 = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_TIPO_ACTIVIDAD}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data7 = await response7.json();
                setTipoActividad(data7);


            } catch (error) {
                console.log(error);
            }
        }
        peticion();
        const intervalId = setInterval(peticion, 1000);
        return () => clearInterval(intervalId);

    }, []);

    const datoSeleccionado = valorSelectModal;
    localStorage.setItem("datoSeleccionado", datoSeleccionado);

    const idCarreraSeleccionada = valorSelectCarrera;
    localStorage.setItem("idCarrera", idCarreraSeleccionada);

    const nombreOtraInstitucion = valorOtraInstitucion;
    localStorage.setItem("nombreOtraInstitucion", nombreOtraInstitucion);

    const detalleDocente = valorDetalleActividadDocente;
    localStorage.setItem("detalleDocente", detalleDocente);

    function cambiarModal() {
        const valueSelect = document.getElementById("select").value;
        const select = document.getElementById("select");
        if (valueSelect == "1") {
            select.setAttribute("onChange", cambiarEstadoModal1(!estadoModal1));

        }
        if (valueSelect == "2") {
            select.setAttribute("onChange", cambiarEstadoModal2(!estadoModal2))

        }
        if (valueSelect == "3") {
            select.setAttribute("onChange", cambiarEstadoModal3(!estadoModal3))

        }
        if (valueSelect == "4") {
            select.setAttribute("onChange", cambiarEstadoModal4(!estadoModal4))
        }
    }

    function cambiarModalInstitucion() {
        const valueSelectInstitucion = document.getElementById("select-tipoInstitucion").value;
        const selectInstitucion = document.getElementById("select-tipoInstitucion")

        if (valueSelectInstitucion === "0") {
            selectInstitucion.setAttribute("onChange", cambiarEstadoModal5(!estadoModal5))
            localStorage.setItem("idUniversidad", 1)
        }
        if (valueSelectInstitucion == "1") {
            selectInstitucion.setAttribute("onChange", cambiarEstadoModal6(!estadoModal6))
            const nombreOtraInstitucion = valorOtraInstitucion;
            localStorage.setItem("nombreOtraInstitucion", nombreOtraInstitucion);
        }
    }

    return (
        <div>
            <Nav />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>

            <div className="contenedor-form">
                <div className="form-card">
                    <h3>Ingresar la actividad de Devengamiento</h3>
                    <div className="contenedor">
                        <div className="form">
                            <label htmlFor="fechaInicio"> Ingresar la fecha de Inicio de la Actividad</label>
                            <input type="date" required={true} id="fechaInicio" name="fechaInicio" className="fechaInicio" />
                            <label htmlFor="fechaFin"> Ingresar la fecha de Finalización de la Actividad</label>
                            <input type="date" required={true} id="fechaFin" name="fechaFin" className="fechaFin" />
                            <label htmlFor="descripcion">Detalle la actividad</label>
                            <input type="text" required={true} id="descripcion" name="descripcion" className="descripcion" />
                            <label htmlFor="evidencias">Link de la evidencia</label>
                            <input type="text" required={true} id="evidencias" name="evidencias" className="evidencias" />
                            <label htmlFor="tipoActividad">Elija el tipo de actividad</label>
                            <select id="select" required={true}
                                onChange={() => { cambiarModal() }}

                                name="idTipoActividad" className="tipoActividad">
                                <option> ** Seleccione **</option>
                                {tipoActividad.map((object) => (
                                    <option key={object.id} value={object.id}>
                                        {object.nombreTipoActividad}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="tipoInstitucion">Elija la institución donde va a realizar la actividad</label>
                            <select id="select-tipoInstitucion" required={true}
                                onChange={() => { cambiarModalInstitucion() }}
                                name="tipoInstitucion" className="tipoInstitucion">
                                <option > ** Seleccione **</option>
                                <option className="opcion" value="0">Universidad</option>
                                <option className="opcion" value="1">Otra Institucion</option>

                            </select>
                            <ModalActividadDevengamiento
                                estado={estadoModal5}
                                cambiarEstado={cambiarEstadoModal5}>
                                <div className="form">
                                    <label htmlFor="select-universidad">Universidad</label>
                                    <select id="select-universidad"  value={valorSelectUniversidad} onChange={handleChange}>
                                        <option disabled > ** Seleccione ** </option>
                                        <option className="opcion" value="1" >Universidad Central del Ecuador</option>
                                    </select>
                                    <label htmlFor="select-universidad">Facultad</label>
                                    <select id="select-facultad"  value={valorSelectFacultad} onChange={e => setvalorSelectFacultad(e.target.value)}>
                                        <option > ** Seleccione ** </option>
                                        {dataFacultades.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.nombreFacultad}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="select-carrera">Carrera</label>
                                    <select id="select-carrera" value={valorSelectCarrera} onChange={e => setvalorSelectCarrera(e.target.value)}>
                                        <option> ** Seleccione ** </option>
                                        {data.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.nombreCarrera}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="contenedor-button">
                                        <button onClick={() => cambiarEstadoModal5(false)} className="button-form">Aceptar</button>
                                    </div>
                                </div>
                            </ModalActividadDevengamiento>

                            <ModalActividadDevengamiento
                                estado={estadoModal6}
                                cambiarEstado={cambiarEstadoModal6}>
                                <div className="form">
                                    <label htmlFor="nombreOtraInstitucion">Nombre de la otra Institucion</label>
                                    <input id="nombreOtraInstitucion" className='nombreOtraInstitucion' type='text' value={valorOtraInstitucion} onChange={handleChange2} />
                                </div>
                                <div className="contenedor-button">
                                    <button onClick={() => cambiarEstadoModal6(false)} className="button-form">Aceptar</button>
                                </div>
                            </ModalActividadDevengamiento>

                            <ModalActividadDevengamiento
                                estado={estadoModal1}
                                cambiarEstado={cambiarEstadoModal1}>

                                <div className="form">
                                    <select id="select-actividadID" value={valorSelectModal} onChange={handleChange}>
                                        <option > ** Seleccione ** </option>
                                        {actividadID.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.tipoActEstructura}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="contenedor-button">
                                        <button onClick={() => cambiarEstadoModal1(false)} className="button-form">Aceptar</button>
                                    </div>

                                </div>
                            </ModalActividadDevengamiento>

                            <ModalActividadDevengamiento
                                estado={estadoModal2}
                                cambiarEstado={cambiarEstadoModal2}>
                                <div className="form">
                                    <select id="select-actividad-docente" value={valorSelectModal} onChange={handleChange}>
                                        <option > ** Seleccione ** </option>
                                        {actividadDocente.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.tipoActDocente}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="valorDetalleActividadDocente">Detalle de la actividad</label>
                                    <input id="valorDetalleActividadDocente" className='valorDetalleActividadDocente' type='text' value={valorDetalleActividadDocente} onChange={handleChange3} />
                                    <div className="contenedor-button">
                                        <button onClick={() => cambiarEstadoModal2(false)} className="button-form">Aceptar</button>
                                    </div>
                                </div>
                            </ModalActividadDevengamiento>


                            <ModalActividadDevengamiento
                                estado={estadoModal3}
                                cambiarEstado={cambiarEstadoModal3}>
                                <div className="form">
                                    <select id="select-actividad-investigadora" value={valorSelectModal} onChange={handleChange}>
                                        <option > ** Seleccione ** </option>
                                        {actividadInvestigadora.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.tipoActInvestigadora}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="contenedor-button">
                                        <button onClick={() => cambiarEstadoModal3(false)} className="button-form">Aceptar</button>
                                    </div>
                                </div>
                            </ModalActividadDevengamiento>


                            <ModalActividadDevengamiento
                                estado={estadoModal4}
                                cambiarEstado={cambiarEstadoModal4} >
                                <div className="form">
                                    <select id="select-actividad-innovacion" value={valorSelectModal} onChange={handleChange}>
                                        <option  > ** Seleccione ** </option>
                                        {actividadInnovacion.map((object) => (
                                            <option key={object.id} value={object.id}>
                                                {object.tipoActInnovacion}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="contenedor-button">
                                        <button onClick={() => cambiarEstadoModal4(false)} className="button-form">Aceptar</button>
                                    </div>
                                </div>
                            </ModalActividadDevengamiento>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioNuevaActividad
