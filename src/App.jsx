import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 px-6">
        <Banner />
      </div>
    </div>
  );
};

export default App;
