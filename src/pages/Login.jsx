import { login } from "../api/login";
import FormularioLogin from "../components/FormularioLogin"
import { Form, redirect } from "react-router-dom"


export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  console.log(datos);
  await login(datos);
  if (sessionStorage.getItem("token") === null) {
    <p> Error </p>
  } else {

    return redirect("/");
  }
}



function Login() {
  return (
    <div>
      <Form method="post">

        <FormularioLogin />

        <div className="contenedor-button">
          <input type="submit" className="button-form" value="Iniciar Sesión" />
        </div>
      </Form>
      <footer>
        <div className="footer">
          <div className="contenedor">
            <div className="texto-footer">
              <p className="texto-copy">
                Copyright &copy 2022 Universidad Central del Ecuador
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Login
