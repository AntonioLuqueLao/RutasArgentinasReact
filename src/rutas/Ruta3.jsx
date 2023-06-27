import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Ruta3=()=> {
    const {data}=useContext(Contexto);
    return (
        <Routes>
            {data.map((lugares, index)=> <Route to={`/${lugares[index].nombre}`}/>)}
        </Routes>
    )
}

export default Ruta3;