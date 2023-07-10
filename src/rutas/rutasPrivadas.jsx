import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import { Navigate, Outlet } from "react-router-dom";

const RutasPrivadas=({children})=> {

    const {login}=useContext(Contexto);
    const estado=login.estado;
    console.log(estado);
/* El localstorage funciona pero el estado no cambia a true */
    return estado
    ? <Outlet/>
    : <Navigate to="/"/>
}

export default RutasPrivadas;