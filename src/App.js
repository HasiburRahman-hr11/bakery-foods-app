import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllFoods from './Pages/AllFoods/AllFoods';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;