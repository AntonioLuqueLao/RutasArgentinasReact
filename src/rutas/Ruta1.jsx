import { Route, Routes } from "react-router-dom"
import Portada from "../paginas/Portada";
import Ruta2 from "./Ruta2";
import RutasPrivadas from "./rutasPrivadas";
import RutasPublicas from "./rutasPublicas";

const Ruta1=()=> {
    return (
        <Routes>
            <Route element= {<RutasPublicas/>}>
            <Route path="/" element={<Portada/>}/>
            </Route>

            <Route element={<RutasPrivadas/>}>
            <Route path="/*" element={<Ruta2/>}/>
            </Route>

        </Routes>
    )
}

export default Ruta1;