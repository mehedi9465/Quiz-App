import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

test('Home test run', () => {
    const history = createMemoryHistory();
    history.push('/exam', {name: '', gender: '', lang: ''});

  render(
      <Router history={history}>
          <Home />
      </Router>
  );

  const home = screen.getByTestId('home');
  expect(home).toBeInTheDocument();
});
