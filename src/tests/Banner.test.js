import React from 'react';
import Banner from '../components/Banner/Banner.js';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router'

afterEach(cleanup);

it('increments after button click', () => {
	const { getByTestId, getByText, rerender } = render(
		<MemoryRouter>
			<Banner items={[
				{'backgroundImage': 'vegas'},
				{'backgroundImage': 'hawaii'},
			]}
				count={0} />
		</MemoryRouter>
		);
	fireEvent.click(getByTestId('angle-right'));
	rerender(
		<MemoryRouter>
			<Banner items={[
				{'backgroundImage': 'vegas'},
				{'backgroundImage': 'hawaii'},
				{'backgroundImage': 'europe'},
			]}
				count={1} />
		</MemoryRouter>
		)
	expect(getByTestId('count').textContent).toBe('2 of 68');
});
