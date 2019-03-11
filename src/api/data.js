import React from 'react'
import { Link } from 'react-router-dom';
export const projectItems = (number) => `Added ${number} new Projects: `;

export const projectArray = (arrays) => {
	return(
		arrays.map((x, index) => {
			let delimiter;
			if (index === arrays.length - 2) {
				delimiter = ' and '
			} else if (index === arrays.length - 1) {
				delimiter = ' '
			} else {
				delimiter = ', '
			}
			return (<span key={index}><Link to={`/${x.link}`}>{x.name}</Link>{delimiter}</span>)
			}
		)
	)
}

export const aOne = [
	{link: 'kansas-city', name: 'Kansas City'},
	{link: 'chicago', name: 'Chicago'}
];

export const aTwo = [
	{link: 'mississippi', name: 'Mississippi River'},
	{link: 'sioux-falls', name: 'Sioux Falls'}
];

export const aThree = [
	{link: 'boston', name: 'Boston'},
	{link: 'italy', name: 'Italy'}
];

export const aFour = [
	{link: 'winter-2008', name: 'Winter'},
	{link: 'spring-2008', name: 'Spring'},
	{link: 'summer-2008', name: 'Summer'},
	{link: 'fall-2008', name: 'Fall'}
];

export const aFive = [
	{link: 'denver', name: 'Denver'},
	{link: 'seattle-2008', name: 'Seattle 2008'}
];

export const aSix = [
	{link: 'san-francisco', name: 'San Francisco'},
	{link: 'hawaii-2008', name: 'Hawaii 2008'}
];

export const aSeven = [
	{link: 'newport', name: 'Newport'},
	{link: 'eagle-creek', name: 'Eagle Creek'},
	{link: 'bonneville', name: 'Bonneville'},
	{link: 'gorge', name: 'Gorge'},
	{link: 'florence', name: 'Florence'}
];

export const aEight = [
	{link: 'mccord-creek', name: 'McCord Creek'},
	{link: 'mt-defiance', name: 'Mt. Defiance'}
];

export const aNine = [
	{link: 'salem', name: 'Salem'},
	{link: 'rowena-crest', name: 'Rowena Crest'},
	{link: 'cape-kiwanda', name: 'Cape Kiwanda'},
	{link: 'multnomah-falls', name: 'Multnomah Falls'}
];

export const aTen = [
	{link: 'beacon-rock', name: 'Beacon Rock'},
	{link: 'mount-hood', name: 'Mount Hood'},
	{link: 'smith-rock', name: 'Smith Rock'},
	{link: 'central-oregon', name: 'Central Oregon'}
];


export const aEleven = [
	{link: 'panther-creek', name: 'Panther Creek'},
	{link: 'hood-river', name: 'Hood River'},
	{link: 'the-dalles', name: 'The Dalles'},
	{link: 'clarno', name: 'John Day Fossil Beds Clarno Unit'}
];

export const aTwelve = [
	{link: 'klickitat', name: 'Klickitat River'},
	{link: 'mt-angel', name: 'Mt. Angel'},
	{link: 'willamette-valley', name: 'Willamette Valley'},
	{link: 'mcminnville', name: 'McMinnville'},
	{link: 'oregon-college', name: 'Oregon Colleges'},
	{link: 'oktoberfest', name: 'Oktoberfest'},
	{link: 'hollywood-video', name: 'Hollywood Video'},
	{link: 'seaside', name: 'Seaside'}
];

export const aThirteen = [
	{link: 'coachella', name: 'Coachella Valley'},
	{link: 'tulip', name: 'Wooden Shoe Tulip Farm'},
	{link: 'detroit-lake', name: 'Detroit Lake'}
];

export const aFourteen = [
	{link: 'warm-springs', name: 'Warm Springs'},
	{link: 'lewis-river', name: 'Lewis River'},
	{link: 'mckenzie-river', name: 'McKenzie River'},
	{link: 'maryhill', name: 'Maryhill'},
	{link: 'eugene', name: 'Eugene'},
	{link: 'mt-st-helens', name: 'Mt. St. Helens'},
	{link: 'cannon-beach', name: 'Cannon Beach'},
	{link: 'oneonta-gorge', name: 'Oneonta Gorge'},
	{link: 'olympia', name: 'Olympia'}
];
