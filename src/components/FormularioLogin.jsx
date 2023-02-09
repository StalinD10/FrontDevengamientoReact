
function FormularioLogin() {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>

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
            <div className="contenedor">
                <div className="contenedor-form">
                    <div className="form-card">
                        <h3>Ingresar los datos del docente</h3>
                        <div className="form">
                            <input type="text" id="username" name="username" minLength="10" maxLength="10"  className="username" placeholder="Usuario" />
                            <input type="password" id="password" name="password" className="password" placeholder="Contraseña" />

                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default FormularioLogin