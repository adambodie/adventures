import React from 'react';

const Item = props => (
        <button onClick={props.handleClick}>
                <img src={`./src/images/adventure${props.index}.jpg`} alt={props.backgroundImage}/>
        </button>
);

export default Item;
