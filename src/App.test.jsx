import { render, screen } from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import App from './App';

describe('render footer correct', () => {
  
  beforeEach(() => {
    render(<App />)
  })

  test("should show the enterprise name in copyright", () => {
    const copyrightElement = screen.getByText(/NovoPayment Inc./i);
    expect(copyrightElement).toBeInTheDocument();
  })

  test("should had the actual year in copyright text", () => {
    const currentYear =  new Date().getFullYear()
    const yearCopyright = screen.getByTestId('year-copyright');
    expect(yearCopyright).toBe(currentYear);
  })
});
