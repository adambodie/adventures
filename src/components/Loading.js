import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Loading extends Component {
  constructor(props) {
      super(props);
    }	

	render() {
		const isFailed = this.props.isFailed;
		return (
		<div>
			{ isFailed ? (
				<div className="loading">
					<h1>File Not Found</h1>
					<img src="./src/images/frown.gif" alt = "Frown" />					
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
