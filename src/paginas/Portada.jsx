import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import "../css/Portada.css";

const Portada=()=> {
    const {logearme}=useContext(Contexto)
    const navegacion=useNavigate();

    const login=(e)=> {
        e.preventDefault();
        if (registro==="Antonio") {
            logearme(registro);
            navegacion("/capital", {replace: true});
        }
    }

    const [registro, setRegistro]=useState("");

    return (
        <>
        <div className="contenedor-portada">
            <h1>Vive el país:</h1>
            <form onSubmit={(e)=>login(e)}>
                <input className="input-portada" type="text" value={registro} onChange={(e)=>setRegistro(e.target.value)} placeholder="Introduzca su nombre de usuario(spoiler: Antonio)..."/>
                <button className="button-portada" onClick={login} type="submit">Registrarse</button>
            </form>
        </div>
        </>
    )
}

export default Portada;