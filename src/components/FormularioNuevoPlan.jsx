import Nav from "../components/Nav"
function FormularioNuevoPlan() {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <Nav />
            <div className="contenedor-form">
                <div className="form-card">
                    <h3>Ingresar el Nuevo Plan de Devengamiento</h3>
                    <div className="form">
                        <label htmlFor="fechaInicio"> Ingresar la fecha de Inicio del Plan</label>
                        <input type="date"   id="fechaInicio" name="fechaInicio" className="fechaInicio" />
                        <label htmlFor="periodo"> Usted va a ingresar el periodo 2022-2023</label>
                        <input type="hidden" id="periodo" value="2022-2023" name="periodo" className="periodo" placeholder="Ingrese el periodo del Plan" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FormularioNuevoPlan
