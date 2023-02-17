import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

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
    const idPlan = await respuesta.json();
    sessionStorage.setItem("idPlan", idPlan);
    if (respuesta.ok) {
           Swal.fire({
        title: "¡Plan agregado!",
        text: "El plan ha sido agregado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: {
          title: "title-swal",
          content: 'my-swal-text'
        },
      });
    } else {
      await Swal.fire({
        title: "Error al agregar el plan",
        text: "Ha ocurrido un error al intentar agregar el plan",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
