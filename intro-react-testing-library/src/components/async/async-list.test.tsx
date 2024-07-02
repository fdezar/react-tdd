import { render, screen } from '@testing-library/react';

import AsyncList from './async-list';

test('show the food data', async () => {
    render(<AsyncList />)

    // findByText retorna una promesa que se resuelve cuando encuentra la coincidencia
    const hamburger = await screen.findByText(/hamburger/i);
    // findBy siempre retorna promesas. Este tipo de queries
    expect(hamburger).toBeInTheDocument();

    expect(await screen.findByText(/pizza/i)).toBeInTheDocument();
    expect(await screen.findByText(/tacos/i)).toBeInTheDocument();
})