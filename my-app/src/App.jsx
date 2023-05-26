import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import RTP from './views/RTP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RTP" element={<RTP />} />
      </Routes>
    </Router>
  );
}

export default App;

