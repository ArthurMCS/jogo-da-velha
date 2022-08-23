import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Board() {
  const { isXNext } = useContext(AppContext);
  return (
    <div>Board</div>
  );
}
