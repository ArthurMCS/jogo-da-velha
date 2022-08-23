/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
  } = useContext(AppContext);

  const handleClick = () => {
    if (squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <button type="button" onClick={handleClick}>{value}</button>
  );
}
