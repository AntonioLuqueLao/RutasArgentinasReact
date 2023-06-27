import Contexto from "../contexto/Contexto";
import { useContext } from "react";

const Ruta=()=> {
    const {state}=useContext(Contexto);
    return (
        <div>
            {console.log(state)}
        <div>Total: {state}$</div>
        </div>
    )
}

export default Ruta;