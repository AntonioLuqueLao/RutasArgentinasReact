import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import { Navigate } from "react-router-dom";

const RutasPublicas=({children})=> {

    const {estado}=useContext(Contexto);

    return (!estado)
    ? children
    : <Navigate to="/*"/>

}

export default RutasPublicas;