function PlanDevengamiento() {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <div className="contenedor-form">
                <div className="form-card">
                    <form className="form" action="POST" >
                        <label htmlFor="fechaInicio"> Ingresar la fecha de Inicio del Plan</label>
                        <input type="date" className="fechaInicio" />
                        <label htmlFor="periodo"> Ingresar el periodo del Plan</label>
                        <input type="text" className="periodo" placeholder="Ingrese el periodo del Plan" />
                        <input type="submit" className="button-form" value="Registrar" />
                    </form>

                </div>

            </div>
        </div>
    )
}

export default PlanDevengamiento
