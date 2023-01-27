import FormularioNuevaActividad from "../components/FormularioNuevaActividad"
import { Form, redirect } from "react-router-dom";
import { agregarNuevaActividad } from "../api/nuevaActividad";

export async function action({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    console.log(datos);
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
