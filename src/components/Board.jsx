import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/context';
import calculateWinner from '../utils/calculateWinner';
import Player from './Player';
import Reset from './Reset';
import Square from './Square';

export default function Board() {
  const {
    squares,
    setWinner,
  } = useContext(AppContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWinner(winner);
    }
  }, [setWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Reset />
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
