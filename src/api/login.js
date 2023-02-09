export async function login(dato) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_LOGIN, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dato),
    });

    if (respuesta.ok) {
      const token = await respuesta.json();
      console.log(token);
      const valorToken = token.token;
      sessionStorage.setItem("token", valorToken);
      const partesToken = valorToken.split(".");
      const decoded = atob(partesToken[1]);
      const valorJson = JSON.parse(decoded);
      const idDocente = valorJson.sub;

      setTimeout(function () {
        location.reload();
      }, 1);
      
      sessionStorage.setItem("idDocente", idDocente);
    } else {
      console.log(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
