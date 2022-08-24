import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Winner() {
  const { winner } = useContext(AppContext);

  return (
    <div>
      {
      winner && <p>{winner}</p>
      }
    </div>
  );
}
