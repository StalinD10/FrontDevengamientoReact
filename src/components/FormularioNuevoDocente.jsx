
const FormularioNuevoDocente = ({ nuevoDocente }) => {

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>

            <div className="contenedor">
                <div className="contenedor-form">
                    <div className="form-card">
                        <h3>Ingresar los datos del docente</h3>
                        <div className="form">
                            <input type="text" id="nombre" name="nombre" className="nombre" placeholder="Nombres" />
                            <input type="text" id="apellidos" name="apellidos" className="apellidos" placeholder="Apellidos" />
                            <input type="text" id="cedula" name="cedula" className="cedula" minLength="10" maxLength="10" placeholder="Cédula" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default FormularioNuevoDocente;