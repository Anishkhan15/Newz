import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import News from './News';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/news/:newsName" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
