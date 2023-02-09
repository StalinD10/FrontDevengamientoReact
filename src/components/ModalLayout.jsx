import styled from "styled-components"
function ModalActividadDevengamiento({ children, estado, cambiarEstado }) {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Open+Sans:ital,wght@0,300;0,700;1,400&family=Playfair+Display:wght@700&family=Raleway:wght@300&family=Roboto:wght@400;700;900&display=swap"
                            rel="stylesheet"></link>
                        <EncabezadoModal>
                            <h3 >Ingrese datos o Seleccione</h3>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}
const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;

top: 0;
left: 0;
background: rgba(0,0,0,.5);
display: flex;
flex-directiom: column;
align-items: center;
padding: 40px;
justify-content: center;
`;

const ContenedorModal = styled.div`
width: 500px;
min-height: 100px;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
background: #fff;
padding: 20px;
`;

const EncabezadoModal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 1px solid #E8E8E8;

h3{
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 23px;
}
`;
const BotonCerrar = styled.div`
position: absolute;
top: 20px;
right: 25px;
width: 23px;
height: 30px;
border: none;
background: none;
cursor: pointer;
transition: .3s ease all;
border-radius: 5px;
color: #1766DC;

&:hover{
    background: #f2f2f2;
}

svg{
    width: 100%;
    height: 100%;
}

`;
export default ModalActividadDevengamiento