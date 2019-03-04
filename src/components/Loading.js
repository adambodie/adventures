import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Loading extends Component {
	render() {
		const { isFailed } = this.props;
		return (
		<div>
			{ isFailed ? (
				  <div className="primary">
						<div className="secondary">
							<h1>File Not Found</h1>
							<img src="https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/frown.gif" alt = "Frown" />					
						</div>
				</div> ) : (
				<div className="loading">
					<h1>Loading...</h1>
					<FontAwesome name='spinner' spin />
				</div>
			  )}
        </div>
		
		
		)
	}
}
