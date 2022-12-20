import React, { createContext, useState } from "react";

export const StatsState = createContext();

export const StatsStateProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToData = (name) => {
    for (const i of data) {
      let a = 1;
      let b = 1;
      if (i.x && i.y) {
        const newData = data.push({ x: a++, y: b++, label: name });
        setData((data)=>[...data,newData]);
        console.log(data)
      }
      if (typeof label === "undefined") {
        const newData = data.push({ x: a++, y: b++, label: name });
        setData((data)=>[...data,newData]);
      }
    }
  };

  

  return (
    <StatsState.Provider
      value={{
        data,
        addToData,
        setData,
      }}
    >
      {children}
    </StatsState.Provider>
  );
};
