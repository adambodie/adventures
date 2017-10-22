import React from 'react';
import {
  Link
} from 'react-router-dom'
const Item = props => (
        <Link to={`/${props.backgroundImage}`}>
                <img src={`./src/images/adventure${props.index}.jpg`} alt={props.backgroundImage}/>
        </Link>
);

export default Item;
