import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import { ACTIONS } from "../contexto/Provider";

const MasInfo = () => {
  const params = useParams();
  const { data, state, dispatch } = useContext(Contexto);
  const destino = data.find((lugar) => lugar.nombre === params.nombre);
  const navegacion=useNavigate();

  const ruta = `/images/${destino.imagen}`;

  const [carroAñadido, setCarroAñadido] = useState(
    sessionStorage.getItem(destino.nombre) !== null
  );

  useEffect(() => {
    setCarroAñadido(sessionStorage.getItem(destino.nombre) !== null);
  }, [destino.nombre]);

  const sumarOrestar = (e) => {
    if (!carroAñadido) {
      e.target.innerText = "Anular";
      dispatch({ type: ACTIONS.sumar, payload: { precio: destino.precio } });
      sessionStorage.setItem(destino.nombre, true);
    } else {
      e.target.innerText = "Añadir al carro";
      dispatch({ type: ACTIONS.restar, payload: { precio: destino.precio } });
      sessionStorage.removeItem(destino.nombre);
    }
    setCarroAñadido(!carroAñadido);
    console.log(state);
  };

  const volverAtras=()=> {
    navegacion(-1)
  }

  return (
    <div>
      <h1>{destino.nombre}</h1>
      <p>{destino.servicio}</p>
      <p>{destino.situación}</p>
      <div className="img-container">
      <img alt={destino.imagen} src={ruta} />
      <div className="contenedor-precio"><h1>{destino.precio}$</h1></div>
      <button className="boton-añadir" onClick={(e) => sumarOrestar(e)}>
      {carroAñadido ? "Anular" : "Añadir al carro"}
      </button>
      <button className="boton-volver" onClick={volverAtras}>Volver</button>
      </div>
    </div>
  );
};

export default MasInfo;
