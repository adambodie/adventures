import React from 'react';
import BannerButton from '../components/Banner/BannerButton.js';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

test('calls "onClick" prop on button click', () => {
	const onClick = jest.fn();
	const { getByTestId } = render(<BannerButton onChange={onClick} className={'angle-left'}/>);
	fireEvent.click(getByTestId('angle-left'));
	expect(onClick).toHaveBeenCalled();
});
