import React from 'react';
import FontAwesome from 'react-fontawesome';

const BannerButton = ({onChange, className}) => (
	<button data-testid={className} onClick={onChange}><FontAwesome className={className} name={className} /></button>
)

export default BannerButton;
