import React, { useEffect } from 'react';

import Chart from './ChartWrapper'

import './App.scss';

function App() {
  useEffect(() => {
    // This is where data loading and cleaning is done.
  }, [])
  
  if (!data) return <div>Loading...</div>
  return (
    <main className="app">
      <Chart data={data} />
    </main>
  );
}

export default App;
