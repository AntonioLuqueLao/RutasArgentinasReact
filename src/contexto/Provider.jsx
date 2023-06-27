import Contexto from "./Contexto"
import data from "./Datos"
import { useReducer } from "react"
import miReducer from "./miReducer"
import types from "./types"

export const ACTIONS= {
    sumar: 'sumar',
    restar: 'restar'
}

export const reducer=(state, action)=> {
    switch (action.type) {
        case ACTIONS.sumar:
            state=state+action.payload.precio
            console.log(state);
            return state

        case ACTIONS.restar:
            state=state-action.payload.precio
            console.log(state);
            return state
    
        default:
            break;
    }
}

const init=()=> {
    const valor=localStorage.getItem("estado")
    return {
        estado: !!valor
}
}

const Provider=({children})=> {
    const [login, dispatch2]=useReducer(miReducer, {}, init);

    const deslogearme=()=>{
        localStorage.removeItem("estado");
        const action={
            type: types.logout
        }
        dispatch2({type: action.type})
    }

    const logearme=(user)=>{
        if (user==="Antonio") {
            const action={
                type: types.login
            }
            localStorage.setItem("estado", true);
            dispatch2({type: action})
        }
    }

    const initialState=0;
     const [state, dispatch]=useReducer(reducer, initialState)
    return (
        <Contexto.Provider value={{data, state, dispatch, logearme, deslogearme, login}}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider