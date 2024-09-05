import { createContext } from "react";

const OwnContext=createContext();

const Ownprovider=({children})=>{
    const moneyFromContextApi_1=200;
    const moneyFromContextApi_2=699;

    return (
        <OwnContext.Provider value={{moneyFromContextApi_1,moneyFromContextApi_2}}>
            {children}
        </OwnContext.Provider>
    )
};

export {OwnContext,Ownprovider}