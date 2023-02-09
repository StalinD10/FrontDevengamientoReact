const idDocente = sessionStorage.getItem("idDocente");
const token = sessionStorage.getItem("token");

export async function obtenerFacultad() {
    try {
        const response = await fetch(import.meta.env.VITE_API_OBTENER_DATOS_FACULTAD, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });
        const data = [await response.json()]
        return data;
    } catch (error) {
        console.error(error);
    }

}