import React, { useState, createContext } from "react";

export const PaymentState = createContext();

export const PaymentStateProvider = ({ children }) => {
  const [noPayment, setNoPayment] = useState(false);

  
function randomPrice(first, second) {
  return Math.floor(Math.random() * first) + second;
}
let price = randomPrice(8, 21);

const processPayment=()=>{
  setNoPayment(true)
}

  return (
    <PaymentState.Provider
      value={{
        noPayment,
        processPayment,
        price
      }}
    >
      {children}
    </PaymentState.Provider>
  );
};
