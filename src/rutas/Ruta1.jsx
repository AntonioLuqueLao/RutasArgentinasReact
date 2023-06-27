import { Route, Routes } from "react-router-dom"
import Portada from "../paginas/Portada";
import Ruta2 from "./Ruta2";

const Ruta1=()=> {
    return (
        <Routes>
            <Route path="/" element={
            <Portada/>
            }/>
            <Route path="/*" element={

            <Ruta2/>
            }/>
        </Routes>
    )
}

export default Ruta1;