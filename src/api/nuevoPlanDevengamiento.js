export async function agregarPlanDevengamiento(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_AGREGAR_PLAN, {
      method: "POST",
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
