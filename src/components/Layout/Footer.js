import React from 'react';
import store from "../../store";

const Footer = () => {
	return (
		<div className="footer">
			<h2>Adam Bodie &copy; {store.getState().year}</h2>
		</div>
	)
}

export default Footer;
