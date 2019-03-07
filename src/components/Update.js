import React from 'react'
import { Link } from 'react-router-dom';

const projectItems = (number) => `Added ${number} new Projects: `;

const Update = () => {
	return (
			<div className="secondary">
				<h3>Recent Updates</h3>
				<p>{projectItems('Nine')}
					<Link to="/warm-springs">Warm Springs</Link>,&nbsp;  
					<Link to="/lewis-river">Lewis River</Link>,&nbsp;  
					<Link to="/mckenzie-river">McKenzie River</Link>,&nbsp;  
					<Link to="/maryhill">Maryhill</Link>,&nbsp;  
					<Link to="/eugene">Eugene</Link>,&nbsp;  
					<Link to="/mt-st-helens">Mt. St. Helens</Link>,&nbsp;  
					<Link to="/cannon-beach">Cannon Beach</Link>,&nbsp;  
					<Link to="/oneonta-gorge">Oneonta Gorge</Link> and&nbsp; 
					<Link to="/olympia">Olympia</Link> - October 21, 2018
				</p>
				<p>{projectItems('Three')}
					<Link to="/coachella">Coachella Valley</Link>,&nbsp;  
					<Link to="/tulip">Wooden Show Tulip Farm</Link> and&nbsp; 
					<Link to="/detroit-lake">Detroit Lake</Link> - August 28, 2018
				</p>						
				<p>{projectItems('Eight')}
					<Link to="/klickitat">Klickitat River</Link>,&nbsp;
					<Link to="/mt-angel">Mt. Angel</Link>,&nbsp;
					<Link to="/willamette-valley">Willamette Valley</Link>,&nbsp;
					<Link to="/mcminnville">McMinnville</Link>,&nbsp;
					<Link to="/oregon-college">Oregon Colleges</Link>,&nbsp;
					<Link to="/oktoberfest">Oktoberfest</Link>,&nbsp;
					<Link to="/hollywood-video">Hollywood Video</Link> and&nbsp;
					<Link to="/seaside">Seaside</Link> - July 19, 2018
				</p>					
				<p>{projectItems('Four')}
					<Link to="/panther-creek">Panther Creek</Link>,&nbsp;
					<Link to="/hood-river">Hood River</Link>,&nbsp;
					<Link to="/the-dalles">The Dalles</Link> and&nbsp;
					<Link to="/clarno">John Day Fossil Beds Clarno Unit</Link> - July 2, 2018
				</p>
				<p>Launched version 1.1 - April 8, 2018</p>
				<p>{projectItems('Four')}
					<Link to="/beacon-rock">Beacon Rock</Link>,&nbsp;
					<Link to="/mount-hood">Mount Hood</Link>,&nbsp;
					<Link to="/smith-rock">Smith Rock</Link> and&nbsp;
					<Link to="/central-oregon">Central Oregon</Link> - April 7, 2018
				</p>
				<p>{projectItems('Four')}
					<Link to="/salem">Salem</Link>,&nbsp;
					<Link to="/rowena-crest">Rowena Crest</Link>,&nbsp;
					<Link to="/cape-kiwanda">Cape Kiwanda</Link> and&nbsp;
					<Link to="/beacon-rock">Multnomah Falls</Link> - March 26, 2018
				</p>
				<p>{projectItems('Two')}
					<Link to="/mccord-creek">McCord Creek</Link> and&nbsp;
					<Link to="/mt-defiance">Mt. Defiance</Link> - February 25, 2018
				</p>
				<p>{projectItems('Five')}
					<Link to="/newport">Newport</Link>,&nbsp;
					<Link to="/eagle-creek">Eagle Creek</Link>,&nbsp;
					<Link to="/bonneville">Bonneville</Link>,&nbsp;
					<Link to="/gorge">Gorge</Link> and&nbsp;
					<Link to="/beacon-rock">Florence</Link> - February 12, 2018
				</p>
				<p>{projectItems('Two')}
					<Link to="/san-francisco">San Francisco</Link> and&nbsp;
					<Link to="/hawaii-2008">Hawaii 2008</Link> - January 21, 2018
				</p>
				<p>{projectItems('Two')}
					<Link to="/denver">Denver</Link> and&nbsp;
					<Link to="/seattle-2008">Seattle 2008</Link> - January 13, 2018
				</p>
				<p>{projectItems('Four')}
					<Link to="/winter-2008">Winter</Link>,&nbsp;
					<Link to="/spring-2008">Spring</Link>,&nbsp; 
					<Link to="/summer-2008">Summer</Link> and&nbsp;
					<Link to="/fall-2008">Fall</Link> 2008 series - December 31, 2017
				</p>
				<p>{projectItems('Two')}
					<Link to="/boston">Boston</Link> and&nbsp;
					<Link to="/italy">Italy</Link> - December 16, 2017
				</p>
				<p>{projectItems('Two')}
					<Link to="/mississippi">Mississippi River</Link> and&nbsp;
					<Link to="/sioux-falls">Sioux Falls</Link> - December 6, 2017
				</p>
				<p>{projectItems('Two')}
					<Link to="/kansas-city">Kansas City</Link> and&nbsp;
					<Link to="/chicago">Chicago</Link> - November 27, 2017
				</p>
				<p>Launched version 1.0 - November 23, 2017</p>
		</div>
	)
}

export default Update;
