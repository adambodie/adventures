import React from 'react';
import {
  Link
} from 'react-router-dom'
const Item = props => (
        <Link to={`/${props.backgroundImage}`}>
                <img src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/links/adventure${props.index}.jpg`} alt={props.backgroundImage}/>
        </Link>
);

export default Item;
