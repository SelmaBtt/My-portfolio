import React, { createContext, useState } from 'react';

export const TrueFalseContext = createContext();

const TrueFalseContextProvider = (props) => {

    const [isCodeTrue, setIsCodeTrue] = useState(true)
    const [isFigmaTrue, setIsFigmaTrue] = useState(false)

    const codeTabHandler = () => {
        setIsCodeTrue(false)
        setIsFigmaTrue(true)
    }

    const figTabHandler = () => {
        setIsCodeTrue(true)
        setIsFigmaTrue(false)
    }

    return(
        <TrueFalseContext.Provider value={{ 
            isCodeTrue, setIsCodeTrue,
            isFigmaTrue, setIsFigmaTrue,
            codeTabHandler,
            figTabHandler
        }}>
            {props.children}
        </TrueFalseContext.Provider>
    )
}
export default TrueFalseContextProvider;