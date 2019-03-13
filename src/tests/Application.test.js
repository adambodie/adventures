import React from 'react';
import renderer from 'react-test-renderer';
import Application from '../components/Application.js';

test('Creates Snapshot for Application', () => {
	const component = renderer.create(<Application />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
