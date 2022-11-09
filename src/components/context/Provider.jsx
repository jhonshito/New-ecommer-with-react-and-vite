
import { createContext, useState } from "react";

export const UserContext = createContext();

const Provider = (props) => {

    const [data, setData] = useState();
    const [estado, setEstado] = useState(false);

    return (
        <UserContext.Provider value={{ data, setData, setEstado, estado }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Provider