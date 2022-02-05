import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Exam from './pages/Exam';

function App() {
  return (
    <div className="App" data-testid='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/result'>
            <Result />
          </Route>
          <Route exact path='/exam'>
            <Exam />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
