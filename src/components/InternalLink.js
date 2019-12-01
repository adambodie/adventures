import React from 'react'
import { Link } from 'gatsby'
import '../styles/home.scss'

const InternalLink = ({backgroundImage, card}) => (
    <Link to={`/pages/${backgroundImage}`}>
        {card}
    </Link>
)

export default InternalLink;