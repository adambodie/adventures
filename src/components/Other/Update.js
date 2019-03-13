import React from 'react'
import { projectItems, projectArray } from '../../api/data';
import { aOne, aTwo, aThree, aFour, aFive, aSix, aSeven, aEight, aNine, aTen, aEleven, aTwelve, aThirteen, aFourteen } from '../../api/data';

const Update = () => {
	return (
		<div className="secondary">
			<h3>Recent Updates</h3>
			<p>{projectItems('Nine')}
				{projectArray(aFourteen)} - October 21, 2018
			</p>
			<p>{projectItems('Three')}
				{projectArray(aThirteen)} - August 28, 2018
			</p>
			<p>{projectItems('Eight')}
				{projectArray(aTwelve)} - July 19, 2018
			</p>
			<p>{projectItems('Four')}
				{projectArray(aEleven)} - July 2, 2018
			</p>
			<p>Launched version 1.1 - April 8, 2018</p>
			<p>{projectItems('Four')}
				{projectArray(aTen)} - April 7, 2018
			</p>
			<p>{projectItems('Four')}
				{projectArray(aNine)} - March 26, 2018
			</p>
			<p>{projectItems('Two')}
				{projectArray(aEight)} - February 25, 2018
			</p>
			<p>{projectItems('Five')}
				{projectArray(aSeven)} - February 12, 2018
			</p>
			<p>{projectItems('Two')}
				{projectArray(aSix)} - January 21, 2018
			</p>
			<p>{projectItems('Two')}
				{projectArray(aFive)} - January 13, 2018
			</p>
			<p>{projectItems('Four')}
				{projectArray(aFour)} 2008 series - December 31, 2017
			</p>
			<p>{projectItems('Two')}
				{projectArray(aThree)} - December 16, 2017
			</p>
			<p>{projectItems('Two')}
				{projectArray(aTwo)} - December 6, 2017
			</p>
			<p>{projectItems('Two')}
				{projectArray(aOne)} - November 27, 2017
			</p>
			<p>Launched version 1.0 - November 23, 2017</p>
		</div>
	)
}

export default Update;
