function MostrarPlanes() {

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
                            <th>Plan</th>
                            <th>Fecha de Inicio</th>
                            <th>Descripcion del plan</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td>2</td>

                            <td>2023-01-27</td>

                            <td>Algún Plan2</td>

                            <td>Completado</td>
                        </tr>

                        <tr className="table-row">
                            <td>3</td>

                            <td>2023-01-27</td>

                            <td>Algún Plan3</td>

                            <td>Completado</td>
                        </tr>

                        <tr className="table-row">
                            <td>4</td>

                            <td>2023-01-27</td>

                            <td>Algún Plan4</td>

                            <td>Completado</td>
                        </tr>

                        <tr className="table-row">
                            <td>5</td>

                            <td>2023-01-27</td>

                            <td>Algún Plan5</td>

                            <td>En proceso</td>
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

export default MostrarPlanes
