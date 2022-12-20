import React,{createContext} from 'react';


export const StatsState=createContext()

export const StatsStateProvider = ({children}) => {

const data=[]
const addToData=data.push()


    return (
       <StatsState.Provider
       value={{
        data,
        addToData
       }}
       >
       {children}
       </StatsState.Provider>
    );
}



