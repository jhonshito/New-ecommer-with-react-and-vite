
import { createContext, useState } from "react";

export const UserContext = createContext();

const Provider = (props) => {

    const [data, setData] = useState();
    const [cantidadStatic, setCantidadStatic] = useState();
    const [maxValor, setValor] = useState([]);

    return (
        <UserContext.Provider value={{ data, setData, setValor, maxValor, setCantidadStatic, cantidadStatic }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Provider