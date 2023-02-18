import FormularioNuevoPlan from "../components/FormularioNuevoPlan"
import { Form, redirect } from "react-router-dom";
import { agregarPlanDevengamiento } from "../api/nuevoPlanDevengamiento";

const idDocente = sessionStorage.getItem("idDocente");

export async function action({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    console.log(datos)
    await agregarPlanDevengamiento(datos);
   return redirect("/FrontDevengamientoReact/nuevaActividad")
}
function NuevoPlanDevengamiento() {
    return (
        <div>
            <Form method="post">
                <FormularioNuevoPlan />
                <div className="contenedor-button">
                    <input type="submit" className="button-form" value="Registrar" />
                </div>
            </Form>
        </div>
    )
}

export default NuevoPlanDevengamiento;
