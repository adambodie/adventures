import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Loading from '../Other/Loading';
import store from '../../store';

export default class PhotoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photographs: [],
		};
	}
	componentDidMount() {
		axios.get(`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/data/${this.props.category}.json`)
			.then(response => {
				store.dispatch({ type: 'LOADED' });
				this.setState({
					photographs: response.data,
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing Photographs data', error);
				store.dispatch({ type: 'FAILED' })
			});
		}
		render() {
			const { color, title, category, background, page, date } = this.props;
			const { photographs } = this.state;
			const carouselStyle = {
				backgroundImage: `url('https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/backgrounds/${background}.jpg')`,
				backgroundSize: 'cover'
			}
			return (
			<React.Fragment>
				{ store.getState().isLoaded ? (
					<div style={carouselStyle} className='carousel-background'>
						<h1 className="title" style={{color: color}}>{title}</h1>
						<PhotoList data={photographs} category={category} page={page} color={color} date={date}/>            
					</div> ) : (
						<Loading isFailed={store.getState().isFailed}/>
					)}
			</React.Fragment>
		);
	}
}
