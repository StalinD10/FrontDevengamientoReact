import FormularioNuevaActividad from "../components/FormularioNuevaActividad"
import { Form, redirect } from "react-router-dom";
import { agregarNuevaActividad } from "../api/nuevaActividad";
import { useState } from "react";
import ModalActividadDevengamiento from '../components/ModalActividadDevengamiento';

export async function action({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    console.log(datos);
    await agregarNuevaActividad(datos);
    return redirect("/");
}

function NuevaActividadDevengamiento() {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
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
