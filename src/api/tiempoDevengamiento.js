import Swal from "sweetalert2";

const token = sessionStorage.getItem("token");


export async function agregarTiempoDevengamiento(datos) {
  const idDatosDevengamiento = sessionStorage.getItem("idDatosDevengamiento");
  const idDocente = sessionStorage.getItem("idDocente");

  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_ACTUALIZAR_DATOS_DEVENGAMIENTO}/${idDatosDevengamiento}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos),
      });
    await respuesta.json();
    Swal.fire({
      title: "¡Tiempo de Devengamiento Agregado!",
      text: "Porfavor revisa tus datos",
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        title: "title-swal",
        content: "my-swal-text",
      },
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error al agregar el tiempo de devengamiento",
      text: "Ha ocurrido un error al intentar agregar el tiempo de devengamiento",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
}
