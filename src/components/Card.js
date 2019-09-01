import React, { Component } from 'react';
import { Link } from "gatsby"
import '../styles/home.scss'
import moment from 'moment'

export default class Card extends Component {
	render() {
		const { backgroundImage, color, backgroundColor, description, mainId, date } = this.props;
		const frontStyle = {
			backgroundImage: `url('https://adventures.bodiewebdesign.com/photos/links/adventure${mainId}.jpg')`, 
			backgroundSize: 'cover', 
			backgroundPosition: 'top'
		};
		return(
		<Link to={`/${backgroundImage}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front" style={frontStyle}>
						{/*Two weeks*/}
						{moment(date).isBetween((moment.now() - 12096000000), moment.now()) && (
							<React.Fragment>
								<span></span>
								<h6>New</h6>
							</React.Fragment>
							)
						}
					</div>
					<div className="flip-card-back" style={{backgroundColor: backgroundColor}}>
						<p style={{color: color, fontWeight: 'bold'}}>{description}</p>
						<p style={{color: color}}>Added: {date}</p>
					</div>
				</div>
			</div>
		</Link>
		);
	}
}
