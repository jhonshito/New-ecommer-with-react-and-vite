
import { createContext, useState } from "react";

export const UserContext = createContext();

const Provider = (props) => {

    const [data, setData] = useState();
    const [estado, setEstado] = useState(false);
    const [valor, setValor] = useState([]);

    return (
        <UserContext.Provider value={{ data, setData, setEstado, estado, setValor, valor }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Provider