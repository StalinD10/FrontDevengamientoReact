const idDocente = sessionStorage.getItem("idDocente");
const token = sessionStorage.getItem("token");

export async function obtenerPlanes(idDocente) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_OBTENER_DATOS_PLAN_DEVENGAMIENTO}/${idDocente}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json()
    console.log(data)
    return data;
} catch (error) {
    console.error(error);
}

}
