import React from 'react'
import { render } from 'react-testing-library'
import Dashboard from './components/Dashboard'

test('renders without crash', () => {
    render(<Dashboard />);
});

test('Strike is showing', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/strike/i);
});

test('Ball is showing', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/ball/i);
});