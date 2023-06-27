import { useNavigate } from "react-router-dom"

const Destinos=({destino})=> {

    const estilo = sessionStorage.getItem(destino.nombre)
    ? "visible"
    : "invisible";

    const navegacion=useNavigate();
    const masInfo=()=> {
        navegacion(`/MasInfo/${destino.nombre}`);
    }

    return (
        <>
        <div className="contenedor-destino">
            <h2>{destino.nombre}</h2>
            <p>{destino.situacion}</p>
            <img src={`/images/${destino.imagen}`} alt={destino.imagen} />
            <button onClick={masInfo}>Más info</button>
            <div className={estilo}></div>
        </div>
        </>
    )
}

export default Destinos