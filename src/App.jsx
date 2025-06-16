import React from 'react';
import { LandingPage } from './LandingPage'; // Correct: named import

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <LandingPage />
    </div>
  );
};

export default App;