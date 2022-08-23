import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import Square from './Square';

export default function Board() {
  const {
    squares,
  } = useContext(AppContext);

  return (
    <div className="board-container">
      <div className="board">
        {
            squares.map((value, index) => (
              <Square key={Math.random()} value={value} index={index} />
            ))
        }
      </div>
    </div>
  );
}
