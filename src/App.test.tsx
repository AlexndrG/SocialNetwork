import React from 'react';
import {render, screen} from '@testing-library/react';
import AppSamuraiJS from './App';

test('renders without crashing', () => {
    render(<AppSamuraiJS/>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
