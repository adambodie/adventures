import React, { Component } from 'react'
import '../styles/home.scss'
import NewCard from './NewCard'
import CardDescription from './CardDescription'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

export default class Card extends Component {
	render() {
		const { backgroundImage, color, backgroundColor, description, mainId, date, startDate, endDate, isExternal } = this.props;
		const frontStyle = {
			backgroundImage: `url('/assets/links/adventure${mainId}.jpg')`, 
			backgroundSize: 'cover', 
			backgroundPosition: 'top'
		};
		const card = (
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
		)
		return(
			<React.Fragment>
				{!isExternal ? (
					<InternalLink backgroundImage={backgroundImage} card={card} />
					) : (
					<ExternalLink backgroundImage={backgroundImage} card={card} />
					)
				}
			</React.Fragment>
		);
		
	}
}
