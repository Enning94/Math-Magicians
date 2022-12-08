import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/calculatorPage';
import Homepage from './components/Homepage';
import Navbar from './components/NavBar';
import Quotes from './components/Quotes';

const App = memo(() => (
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculatorPage" element={<CalculatorPage />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

));
App.displayName = 'MyApp';
export default App;
