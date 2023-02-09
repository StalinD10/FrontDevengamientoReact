
const FormularioNuevoDocente = ({ data }) => {

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>

            <div className="contenedor">
                <div className="contenedor-form">
                    <div className="form-card">
                        <h3>Datos Docente</h3>
                        <p>Ingresar los datos del Docente</p>
                        <div className="form">

                            <input type="text" id="nombre" defaultValue={data?.nombres} name="nombre" className="nombre" placeholder="Nombres" />
                            <input type="text" id="apellidos" defaultValue={data?.apellidos} name="apellidos" className="apellidos" placeholder="Apellidos" />
                            <input type="text" id="cedula" defaultValue={data?.cedula} name="cedula" className="cedula" minLength="10" maxLength="10" placeholder="Cédula" />
                            <input type="text" id="categoria" defaultValue={data?.categoria} name="categoria" className="categoria" placeholder="Categoría Actual" />
                            <input type="text" id="redInvestigadores" defaultValue={data?.redInvestigadores} name="redInvestigadores" className="redInvestigadores" placeholder="Res de Investigadores" />
                            <input type="text" id="modalidad" defaultValue={data?.modalidad} name="modalidad" className="modalidad" placeholder="Modalidad" />
                            <input type="date" id="fechaReintegro" defaultValue={data?.fechaReintegro} name="fechaReintegro" className="fechaReintegro" placeholder="Fecha de reintegro" />
                            <input type="text" id="enlace" defaultValue={data?.enlace} name="enlace" className="enlace" placeholder="Enlace del trabajo final" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default FormularioNuevoDocente;