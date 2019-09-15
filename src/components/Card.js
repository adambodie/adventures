import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../styles/home.scss'
import NewCard from './NewCard'
import CardDescription from './CardDescription'

export default class Card extends Component {
	render() {
		const { backgroundImage, color, backgroundColor, description, mainId, date, startDate, endDate } = this.props;
		const frontStyle = {
			backgroundImage: `url('https://adventures.bodiewebdesign.com/_photos/links/adventure${mainId}.jpg')`, 
			backgroundSize: 'cover', 
			backgroundPosition: 'top'
		};
		
		return(
		<Link to={`/${backgroundImage}`}>
			<div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front' style={frontStyle}>
						<NewCard date={date} />
					</div>
					<div className='flip-card-back' style={{backgroundColor: backgroundColor}}>
						<CardDescription 
								description={description} 
								color={color} 
								startDate={startDate} 
								endDate={endDate} 
								date={date} 
							/>
					</div>
				</div>
			</div>
		</Link>
		);
	}
}
