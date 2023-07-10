import { Routes, Route } from "react-router-dom";
import Capital from "../paginas/Capital";
import Norte from '../paginas/Norte'
import Ruta from "../paginas/Ruta";
import Nav from "../Componentes/Nav";
import MasInfo from "../paginas/MasInfo";

const Ruta2=()=> {
    return (
        <>
                <Nav/>
        <Routes>
            <Route path="/Capital" index element={<Capital/>}/>
            <Route path="/Norte" element={<Norte/>}/>
            <Route path="/Ruta" element={<Ruta/>}/>
            <Route path="/MasInfo/:nombre" element={<MasInfo/>}/>
        </Routes>
        </>
    )
}

export default Ruta2;