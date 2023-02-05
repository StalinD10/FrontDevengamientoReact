import { useState } from "react";


import ModalActividadDevengamiento from './ModalActividadDevengamiento';
function FormularioNuevaActividad({ }) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);

    function cambiarModal() {
        const valueSelect = document.getElementById("select").value;
        console.log(valueSelect);
        const select = document.getElementById("select");
        if (valueSelect == "1") {
            select.setAttribute("onChange", cambiarEstadoModal1(!estadoModal1))
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
    return (
        <div>

            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>

            <div className="contenedor-form">
                <div className="form-card">
                    <h3>Ingresar la actividad de Devengamiento</h3>
                    <div className="contenedor">
                        <div className="form">
                            <label htmlFor="fechaInicio"> Ingresar la fecha de Inicio de la Actividad</label>
                            <input type="date" id="fechaInicio" name="fechaInicio" className="fechaInicio" />
                            <label htmlFor="fechaFin"> Ingresar la fecha de Finalización de la Actividad</label>
                            <input type="date" id="fechaFin" name="fechaFin" className="fechaFin" />
                            <label htmlFor="descripcion">Detalle la actividad</label>
                            <input type="text" id="descripcion" name="descripcion" className="descripcion" />
                            <label htmlFor="tipoActividad">Elija el tipo de actividad</label>
                            <select id="select"
                                onChange={() => { cambiarModal() }}

                                name="tipoActividad" className="tipoActividad">
                                <option disabled> ** Seleccione **</option>
                                <option className="opcion" value="1">Estructuras I + D</option>
                                <option className="opcion" value="2">Actividad Docente</option>
                                <option className="opcion" value="3">Actividad Investigadora</option>
                                <option className="opcion" value="4">Innovacion</option>
                            </select>

                            <ModalActividadDevengamiento
                                estado={estadoModal1}
                                cambiarEstado={cambiarEstadoModal1}>

                                <div className="form">
                                    <select id="select-actividadID">
                                        <option disabled> ** Seleccione ** </option>
                                        <option className="opcion" value="1">Grupos de Investigación</option>
                                        <option className="opcion" value="2">Coifs- facultades</option>
                                        <option className="opcion" value="3">INSTITUTOS</option>
                                        <option className="opcion" value="4">LABORATORIOS</option>
                                        <option className="opcion" value="5">REDES DE LA IES</option>
                                        <option className="opcion" value="6">MAESTRIAS DE INVESTIGACION</option>
                                        <option className="opcion" value="7">PROGRAMAS DE VINCULACION</option>
                                        <option className="opcion" value="8">REDES NUEVAS</option>
                                        <option className="opcion" value="9">OBSERVATORIOS</option>
                                        <option className="opcion" value="10">APOYO Y GESTIÓN DIRECCIÓN DE DOCTORADOS E INVESTIGACIÓN</option>
                                        <option className="opcion" value="11">APOYO EN PROCESOS DE INVESTIGACIÓN O DOCTORADOS UCE</option>
                                    </select>
                                </div>
                            </ModalActividadDevengamiento>

                            <ModalActividadDevengamiento
                                estado={estadoModal2}
                                cambiarEstado={cambiarEstadoModal2}>
                                <div className="form">
                                    <select id="select-actividad-docente">
                                        <option disabled> ** Seleccione ** </option>
                                        <option className="opcion" value="1">Pregrado Horas Clase</option>
                                        <option className="opcion" value="2">POSTGRADO</option>
                                        <option className="opcion" value="3">DIRECCION TESIS DE MAESTRIA</option>
                                        <option className="opcion" value="4">DIRECCION TESIS DE DOCTORADO</option>
                                        <option className="opcion" value="5">CREACION DE PROGRAMAS DE MAESTRIA</option>
                                        <option className="opcion" value="6">CREACION DE PROGRAMAS DE DOCTORADO</option>
                                        <option className="opcion" value="7">CREACION DE CARRERAS O REFORMAS DE CARRERA</option>
                                        <option className="opcion" value="8">INTERCAMBIOS DOCENTES</option>
                                        <option className="opcion" value="9">POSTDOCTORADOS</option>
                                    </select>
                                </div>
                            </ModalActividadDevengamiento>


                            <ModalActividadDevengamiento
                                estado={estadoModal3}
                                cambiarEstado={cambiarEstadoModal3}>
                                <div className="form">
                                    <select id="select-actividad-investigadora">
                                        <option disabled> ** Seleccione ** </option>
                                        <option className="opcion" value="1">Proyectos con redes internacionales</option>
                                        <option className="opcion" value="2">Proyectos en redes nacionales</option>
                                        <option className="opcion" value="3">Proyectos multidisciplinares</option>
                                        <option className="opcion" value="4">Proyectos por facultades</option>
                                        <option className="opcion" value="5">PROYECTOS SEMILLA</option>
                                        <option className="opcion" value="6">PROYECTOS DE VINCULACION COMO DIRECTOR</option>
                                        <option className="opcion" value="7">ARTICULOS INDEXADOS EXTERNOS UCE</option>
                                        <option className="opcion" value="8">ARTÍCULO INDEXADOS EN REVISTAS UCE</option>
                                        <option className="opcion" value="9">ACTAS Y MEMORIAS EN CONGRESOS</option>
                                        <option className="opcion" value="10">CAPÍTULOS DE LIBROS / LIBROS COMPLETOS CON ISBN</option>
                                        <option className="opcion" value="11">Obra relevante</option>
                                    </select>
                                </div>
                            </ModalActividadDevengamiento>


                            <ModalActividadDevengamiento
                                estado={estadoModal4}
                                cambiarEstado={cambiarEstadoModal4}>
                                <div className="form">
                                    <select id="select-actividad-innovacion">
                                        <option disabled> ** Seleccione ** </option>
                                        <option className="opcion" value="1">PATENTES</option>
                                        <option className="opcion" value="2">PARTICIPACION EN PROGRAMAS O PROYECTOS INCIDENCIA CON ESTANCIAS GUBERNAMENTALES</option>
                                        <option className="opcion" value="3">PARTICIPACION EN PROGRAMAS O PROYECTOS CON EMPRESA PRIVADA</option>

                                    </select>
                                </div>
                            </ModalActividadDevengamiento>

                            <label htmlFor="evidencias">Link de la evidencia</label>
                            <input type="text" id="evidencias" name="evidencias" className="evidencias" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioNuevaActividad
