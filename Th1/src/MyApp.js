import { createContext, useState } from "react";

export const MyAppContext = createContext({
    isLogin: false,
    message: '',
    setMessage: message => undefined,
})

export const MyAppProvider = ({children}) => {
    const [message, setMessage] = useState('');
    return(
        <MyAppContext.Provider
            value={{
                isLogin: false,
                message: message,
                setMessage: setMessage,
            }}
        >
            {children}
        </MyAppContext.Provider>
    )
}