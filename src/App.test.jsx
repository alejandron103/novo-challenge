import { render, screen } from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import App from './App';

test('renders learn react link', () => {
  
  beforeEach(() => {
    render(<App />)
  })

  test("should show title all the time", () => {
    const linkElement = screen.getByText(/Vite and React/i);
    expect(linkElement).toBeInTheDocument();
  })
});
