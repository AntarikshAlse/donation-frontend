import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DonationPage from './components/DonationPage';

const App: React.FC = () => {
  const userId = 1;
  //

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage userId={userId} />}/>
          <Route path="/donate" element={<DonationPage userId={userId} />}/>
        </Routes>
    </Router>
  );
};

export default App;