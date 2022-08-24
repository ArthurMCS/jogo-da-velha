import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Player() {
  const { isXNext } = useContext(AppContext);
  return (
    <h1>
      Player:
      {isXNext ? 'X' : 'O'}
    </h1>
  );
}
