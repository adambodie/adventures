import React from 'react'
import '../styles/home.scss'

const ExternalLink = ({backgroundImage, card}) => (
    <a href={`http://${backgroundImage}`}>
        {card}	
    </a>
)

export default ExternalLink;