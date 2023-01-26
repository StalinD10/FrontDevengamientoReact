import FormularioNuevoDocente from "../components/FormularioNuevoDocente"
import { Form, redirect } from "react-router-dom";
import { agregarDocente } from "../api/nuevoDocente";

export async function action({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    console.log(datos);
    await agregarDocente(datos);
    return redirect("/");
}

function NuevoDocente() {

    return (
        <div>
            <Form method="post">

                <FormularioNuevoDocente />
                <div className="">
                    <input type="submit" className="button-form" value="Registrar" />
                </div>
            </Form>
        </div>
    )
}

export default NuevoDocente
