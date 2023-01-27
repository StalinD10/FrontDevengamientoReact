
function FormularioNuevaActividad() {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <div className="contenedor">
                <div className="contenedor-form">
                    <div className="form-card">
                        <h3>Ingresar la actividad de Devengamiento</h3>
                        <div className="form">
                            <label htmlFor="fechaInicio"> Ingresar la fecha de Inicio de la Actividad</label>
                            <input type="date" id="fechaInicio" name="fechaInicio" className="fechaInicio" />
                            <label htmlFor="fechaFin"> Ingresar la fecha de Finalización de la Actividad</label>
                            <input type="date" id="fechaFin" name="fechaFin" className="fechaFin" />
                            <label htmlFor="descripcion">Detalle la actividad</label>
                            <input type="text" id="descripcion" name="descripcion" className="descripcion" />
                            <label htmlFor="tipoActividad">Elija el tipo de actividad</label>
                            <select name="tipoActividad" className="tipoActividad">
                                <option disabled> ** Seleccione **</option>
                                <option className="opcion" value="1">Estructuras I + D</option>
                                <option className="opcion" value="2">Actividad Docente</option>
                                <option className="opcion" value="3">Actividad Investigadora</option>
                                <option className="opcion" value="4">Innovacion</option>
                            </select>
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
