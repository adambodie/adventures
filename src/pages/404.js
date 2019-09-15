import React from 'react'
import Layout from '../components/Layout'
import '../styles/notFound.scss'

const NotFound = () => (
<Layout>
	<div className='notFound'>
		<h1>Page Not Found</h1>
		<img src={'https://adventures.bodiewebdesign.com/_photos/frown.gif'} alt='Logo' className='img-fluid' />
	</div>
</Layout>
)

export default NotFound;
