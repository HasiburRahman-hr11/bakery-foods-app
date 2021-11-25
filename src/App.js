import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import AllFoods from './Pages/AllFoods/AllFoods';
import Home from './Pages/Home/Home';
import SingleFood from './Pages/SingleFood/SingleFood';
import Cart from './Pages/Cart/Cart';
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess';
import PageScroll from './Components/PageScroll/PageScroll';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <PageScroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<SingleFood />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;