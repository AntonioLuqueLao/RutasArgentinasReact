import { useNavigate } from "react-router-dom";
import Destinos from "../Componentes/Destinos";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Nav from "../Componentes/Nav";

const Principal=()=> {
    const {data}=useContext(Contexto)
    const navegacion=useNavigate();
    const logout=()=> {
        navegacion("/", {replace: true});
    }
    return (
        <div>
            <Nav/>
            <h1>Principal</h1>
            {console.log(data)}
            <div>
            {data.map((lugar, index)=> <Destinos key={index} destino={lugar}/> )}
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Principal;