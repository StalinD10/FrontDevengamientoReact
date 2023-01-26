import image from "../img/uce.png"
function Index() {
    return (

        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <div className="contenido-body">
                <div className="texto-body">
                    <h3 className="titulo-body">
                        Bienvenido al Sistema de Seguimiento a Devengamientos de los Docentes
                    </h3>
                </div>
                <div className="contenedor contenedor-body">
                    <div className="imagen">
                        <img src={image} alt="imagen uce" />
                    </div>
                    <div className="texto-contenedor">
                        <p>
                            En este sistema, los docentes podrán registrar su devengamiento de las becas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
