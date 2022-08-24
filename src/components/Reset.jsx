import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Reset() {
  const { setSquares, setIsXNext } = useContext(AppContext);

  const handleClick = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>Reset</button>
    </p>
  );
}
