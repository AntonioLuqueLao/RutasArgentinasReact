import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Destinos from "../Componentes/Destinos";

const Norte=()=> {
    const {data}=useContext(Contexto);
    return (
        <>
        <div className="contenedor-destinos">
        {data
        .filter((lugar)=>  lugar.zona!=='cp')
        .map((lugar,index)=> <Destinos key={index} destino={lugar} /> )}
        </div>
        </>
    )
}

export default Norte;