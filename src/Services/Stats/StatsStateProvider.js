import React, { createContext, useState } from "react";

export const StatsState = createContext();

export const StatsStateProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToData = (name) => {
    let a = 1;
    let b = 1;
    const newData = data.push([{ x: a++, y: b++, label: name }]);
    setData(newData);

    if (data.length === 0) {
      const newData = data.push([{ x: a, y: b, label: name }]);
      setData(newData);
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
