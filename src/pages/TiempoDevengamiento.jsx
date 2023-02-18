import { Form, redirect, useNavigate } from "react-router-dom";
import FormularioTiempoDevengamiento from "../components/FormularioTiempoDevengamiento";
import { agregarTiempoDevengamiento } from "../api/tiempoDevengamiento";

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
   await agregarTiempoDevengamiento(datos);
  return redirect("/datosDocente/${id}")
}

function TiempoDevengamiento() {
  return (
    <div>
      <Form method="post">
        <FormularioTiempoDevengamiento />
        <div className="contenedor-button">
          <input type="submit" className="button-form" value="Registrar" />
        </div>
      </Form>
    </div>
  )
}

export default TiempoDevengamiento
