import React from 'react';
import { render, screen } from '@testing-library/react';
import Exam from '../pages/Exam';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

test('Home test run', () => {
    const history = createMemoryHistory();
    history.push('/exam', {ansCount: 1, count: 1});

  render(
      <Router history={history}>
          <Exam />
      </Router>
  );

  const exam = screen.getByTestId('exam');
  expect(exam).toBeInTheDocument();
});
