import React from 'react';
import * as data from '../../api/data';

const Update = () => {
	return (
		<div className="secondary">
			<h3>Recent Updates</h3>
			<p>{data.projectItems('Nine')}
				{data.projectArray(data.aFourteen)} - October 21, 2018
			</p>
			<p>{data.projectItems('Three')}
				{data.projectArray(data.aThirteen)} - August 28, 2018
			</p>
			<p>{data.projectItems('Eight')}
				{data.projectArray(data.aTwelve)} - July 19, 2018
			</p>
			<p>{data.projectItems('Four')}
				{data.projectArray(data.aEleven)} - July 2, 2018
			</p>
			<p>Launched version 1.1 - April 8, 2018</p>
			<p>{data.projectItems('Four')}
				{data.projectArray(data.aTen)} - April 7, 2018
			</p>
			<p>{data.projectItems('Four')}
				{data.projectArray(data.aNine)} - March 26, 2018
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aEight)} - February 25, 2018
			</p>
			<p>{data.projectItems('Five')}
				{data.projectArray(data.aSeven)} - February 12, 2018
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aSix)} - January 21, 2018
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aFive)} - January 13, 2018
			</p>
			<p>{data.projectItems('Four')}
				{data.projectArray(data.aFour)} 2008 series - December 31, 2017
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aThree)} - December 16, 2017
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aTwo)} - December 6, 2017
			</p>
			<p>{data.projectItems('Two')}
				{data.projectArray(data.aOne)} - November 27, 2017
			</p>
			<p>Launched version 1.0 - November 23, 2017</p>
		</div>
	)
}

export default Update;
