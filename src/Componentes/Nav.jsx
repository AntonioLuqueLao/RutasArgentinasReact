import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Nav=()=> {
    const navegacion=useNavigate();
    const {deslogearme}=useContext(Contexto);

    const logout=()=> {
        navegacion("/", {replace: true});
        deslogearme();
    }
    return (
        <nav>
            <div>
            <NavLink to="/Capital" className="NavLink"><span>Capital y Patagonia</span></NavLink>
            <NavLink to="/Norte" className="NavLink"><span>Norte y Este</span></NavLink>
            <NavLink to="/Ruta" className="NavLink"><span>Ruta</span></NavLink>
            </div>
            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default Nav;