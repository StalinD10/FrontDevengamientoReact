function MostrarDatosDocente() {

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                rel="stylesheet"></link>
            <header>
                <header className="header">
                    <div className="contenedor">
                        <div className="textos-header">
                            <h1>
                                Seguimiento de devengamiento a doctorados
                            </h1>
                            <p className="texto-universidad">
                                UNIVERSIDAD CENTRAL DEL ECUADOR
                            </p>
                        </div>

                    </div>
                </header>
            </header>
            <div className="contenedor-table">
                <table className="table">
                    <thead className="table-head">
                        <tr className="table-row">
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cédula</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td>Nombre1</td>

                            <td>Apellido1</td>

                            <td>1111111111</td>

                            <td>Usuario1</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <footer>
                <div className="footer">
                    <div className="contenedor">
                        <div className="texto-footer">
                            <p className="texto-copy">
                                Copyright &copy 2022 Universidad Central del Ecuador
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MostrarDatosDocente
