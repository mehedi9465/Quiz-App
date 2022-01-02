import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import QuestionBoard from './components/Question Board/QuestionBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/question' element={<QuestionBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
