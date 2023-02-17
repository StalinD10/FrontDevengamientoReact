import Nav from "./Nav";
function FormularioTiempoDevengamiento() {
   

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
                <Nav/>
            <div className="contenedor">
                <div className="contenedor-form">
                    <div className="form-card">
                        <h3>Ingresar los datos del docente</h3>
                        <div className="form">
                            <label htmlFor="tiempoDevengamiento">Ingrese el tiempo de devengamiento por semestre</label>
                            <input type="number" required={true} id="tiempoDevengamiento" name="tiempoDevengamiento"
                             minLength="4" maxLength="4" className="tiempoDevengamiento" placeholder="Tiempo Devengamiento" />
                            <label htmlFor="enlaceContratoAdenda">Ingrese el contrato o adenda</label>
                            <input type="text" required={true} id="enlaceContratoAdenda" name="enlaceContratoAdenda" 
                            className="enlaceContratoAdenda" placeholder="Ingrese el LINK del Contrato Adenda" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioTiempoDevengamiento
