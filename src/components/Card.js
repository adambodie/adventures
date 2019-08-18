import React, { Component } from 'react';
import { Link } from "gatsby"
import '../styles/home.scss'

export default class Card extends Component {
	render() {
		const { backgroundImage, color, backgroundColor, description, index } = this.props;
		return(
		<Link to={`/${backgroundImage}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src={`https://adventures.bodiewebdesign.com/photos/links/adventure${index+1}.jpg`} alt={backgroundImage} className="cards" />
					</div>
					<div className="flip-card-back" style={{backgroundColor: backgroundColor}}>
						<p style={{color: color, fontWeight: 'bold'}}>{description}</p>
					</div>
				</div>
			</div>
		</Link>
		);
	}
}
