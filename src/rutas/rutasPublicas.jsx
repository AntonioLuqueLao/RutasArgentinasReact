import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import { Navigate, Outlet } from "react-router-dom";

const RutasPublicas=({children})=> {

    const {login}=useContext(Contexto);
    const estado=login.estado;
    console.log(estado);
    
    return (!estado)
    ? <Outlet/>
    : <Navigate to="/*"/>

}

export default RutasPublicas;