/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export default function Provider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const state = useMemo(() => ({
    squares,
    setSquares,
    isXNext,
    setIsXNext,
  }), [squares, isXNext]);

  return (
    <AppContext.Provider value={state}>{children}</AppContext.Provider>
  );
}
