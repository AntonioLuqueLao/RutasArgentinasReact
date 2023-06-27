import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import { Navigate } from "react-router-dom";

const RutasPrivadas=({children})=> {

    const {login}=useContext(Contexto);
    const estado=login.estado;

    return (estado)
    ? children
    : <Navigate to="/"/>
}

export default RutasPrivadas;