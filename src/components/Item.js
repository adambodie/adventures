import React from 'react';

const Item = props => (
        <button onClick={props.handleClick}>
                <img src={`./src/images/adventure${props.index}.jpg`} alt={props.title}/>
        </button>
);

export default Item;
