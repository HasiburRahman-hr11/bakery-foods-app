import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import AllFoods from './Pages/AllFoods/AllFoods';
import Home from './Pages/Home/Home';
import SingleFood from './Pages/SingleFood/SingleFood';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<SingleFood />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;