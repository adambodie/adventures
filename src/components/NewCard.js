import React, { Component } from 'react'
import '../styles/home.scss'
import moment from 'moment'

export default class NewCard extends Component {
	render() {
		//Two weeks
		const { date } = this.props;
		return(
			moment(date).isBetween((moment.now() - 12096000000), moment.now()) && (
				<React.Fragment>
					<span></span>
					<h6>New</h6>
				</React.Fragment>
				)
		);
	}
}
