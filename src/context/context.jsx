/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function Provider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState();

  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    winner,
    setWinner,
  };

  return (
    <AppContext.Provider value={state}>{children}</AppContext.Provider>
  );
}
