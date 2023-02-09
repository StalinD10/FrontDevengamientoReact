const token = sessionStorage.getItem("token");
export async function agregarPlanDevengamiento(datos) {
  const idDocente = sessionStorage.getItem("idDocente");
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_AGREGAR_PLAN}/${idDocente}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos),
      }
    );
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
