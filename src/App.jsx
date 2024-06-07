import React from 'react';
import { Sidebar } from './components/Sidebar';

const App = () => {
  return (
    <div className="h-screen bg-black flex">
      <div className="h-[90%] flex"></div>
      <Sidebar />
    </div>
  );
};

export default App;
