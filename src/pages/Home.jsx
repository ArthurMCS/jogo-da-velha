import React from 'react';
import Board from '../components/Board';
import Provider from '../context/context';
import './Home.css';

export default function Home() {
  return (
    <Provider>
      <Board />
    </Provider>
  );
}
