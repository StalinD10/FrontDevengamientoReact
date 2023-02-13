import FormularioNuevaActividad from "../components/FormularioNuevaActividad"
import { Form, redirect } from "react-router-dom";
import { agregarNuevaActividad } from "../api/nuevaActividad";



export async function action({ request }) {
    const storedData = localStorage.getItem("datoSeleccionado");
    console.log(storedData)
    const idUniversidad = localStorage.getItem("idUniversidad");
    const idCarrera = localStorage.getItem("idCarrera");
    const nombreOtraInstitucion = localStorage.getItem("nombreOtraInstitucion");
    const idFacultad = localStorage.getItem("idFacultad");

    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    datos.idTipoActividad = storedData;
    datos.idUniversidad = idUniversidad;
    datos.idCarrera = idCarrera;
    datos.nombreOtraInstitucion = nombreOtraInstitucion;
    datos.idFacultad = idFacultad;
    console.log(datos);
    const valorSeleccionado = FormularioNuevaActividad.valorSeleccionado;

    await agregarNuevaActividad(datos);
    return redirect("/");

}

function NuevaActividadDevengamiento() {
    return (
        <div>
            <Form method="post">

                <FormularioNuevaActividad />

                <div className="contenedor-button">
                    <input type="submit" className="button-form" value="Registrar" />
                </div>
            </Form>
        </div>

    )
}

export default NuevaActividadDevengamiento
