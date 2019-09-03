import React, { Component } from 'react'
import '../styles/home.scss'
import moment from 'moment'

export default class CardDescription extends Component {
	render() {
		//Two weeks
		const { description, color, startDate, endDate, date } = this.props;
		const formatDate = (date) => moment(date).format("MMMM DD, YYYY");
		return(
		<React.Fragment>
		<p style={{color: color, fontWeight: 'bold'}}>{description}</p>
			{moment(date).isValid() && (
				<React.Fragment>
					<p style={{color: color}}>Visit: {formatDate(startDate)} {!moment(startDate).isSame(endDate) && (` to ${formatDate(endDate)}`)}</p>
					<p style={{color: color}}>Added: {formatDate(date)}</p>
				</React.Fragment>
			)}
		</React.Fragment>
		);
	}
}
