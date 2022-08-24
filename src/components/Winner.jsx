import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export default function Winner() {
  const { winner } = useContext(AppContext);

  if (!winner) return <div />;
  return (
    <p className="winner">
      {winner}
      {' '}
      ganhou!!!
    </p>
  );
}
