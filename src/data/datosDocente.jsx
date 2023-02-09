const idDocente = sessionStorage.getItem("idDocente");
const token = sessionStorage.getItem("token");

export async function obtenerDocentes(idDocente) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_OBTENER_DOCENTE}/${idDocente}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    });
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error);
  }

}

export async function obtenerDatosDevengamiento() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_DEVENGAMIENTO}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    });
    const datosDevengamiento = await response.json()
    
    return datosDevengamiento;
  } catch (error) {
    console.error(error);
  }

}
export async function obtenerDocente(id) {

  try {
    const response = await fetch(`${import.meta.env.VITE_API_OBTENER_DOCENTE}/${id}`);
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error);
  }


}

export async function actualizarDocente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_ACTUALIZAR_DOCENTE}/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos),
    });
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}