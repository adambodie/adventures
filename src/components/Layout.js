import React from 'react'
import Header from './Header'
import { Helmet } from "react-helmet"

export default ({ children }) => (
	<React.Fragment>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Adam's Adventures</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />
		</Helmet>
		<Header />
		{children}
	</React.Fragment>
)
