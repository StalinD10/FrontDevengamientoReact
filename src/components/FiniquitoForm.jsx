import Nav from "./Nav";
import { useState } from "react";

const token = sessionStorage.getItem("token");
const idDocente = sessionStorage.getItem("idDocente");


function FiniquitoForm() {
    const [valorSelectFiniquito, setValorSelectFiniquito] = useState(" ");
    
    function handleChange(event) {
        setValorSelectFiniquito(event.target.value);
    }

            const enviarFiniquito = async () => {
            try {
                const response1 = await fetch(`${import.meta.env.VITE_API_EVIAR_SOLICITUD_FINIQUITO}/${idDocente}`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(valorSelectFiniquito),
                });
                await response1.json()
                if (response1.ok){
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/FrontDevengamientoReact";
                }

            } catch (error) {
                console.log(error);
            }
           
        };

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <Nav />
            <div className="contenedor-form">
                <div className="form-card">
                    <h3>Solicitud de finiquito</h3>
                    <div className="contenedor">
                        <div className="form">
                            
                            <p>Cuando se solicita un finiquito, no se podrá ya registrar mas periodos ni actividades de devengamiento</p>
                            <p>Ten en cuenta que una vez solicitado el finiquito, se revisará todos los planes  y actividades registradas.</p>
                            <label htmlFor="selectFiniquito"> ¿Realizar la solicitud de finiquito?</label>
                            <select id="selectFiniquito" value={valorSelectFiniquito} onChange={handleChange}>
                                <option > ** Seleccione ** </option>
                                <option className="opcion" value="true" >Enviar Solitud</option>
                            </select>
                            <input type="submit" onClick={enviarFiniquito} className="button-form" value="Enviar Solicitud" />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiniquitoForm
