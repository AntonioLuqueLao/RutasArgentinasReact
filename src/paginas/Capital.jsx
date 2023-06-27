import Contexto from "../contexto/Contexto";
import { useContext } from "react";
import Destinos from "../Componentes/Destinos";


const Capital=()=> {
    const {data}=useContext(Contexto)
    return (
        <>
        <div className="contenedor-destinos">
        {data
        .filter((lugar)=>  lugar.zona==='cp')
        .map((lugar,index)=> <Destinos key={index} destino={lugar} /> )}
        </div>
        </>
    )
}

export default Capital