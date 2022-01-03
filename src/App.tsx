import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Exam from './components/Exam/Exam';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exam' element={<Exam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
