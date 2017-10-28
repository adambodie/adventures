import React from 'react';

const Photo = props => (
  <div>
        <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.title}/>
        <h3 style={{color: props.color}}>{props.title}</h3>
        <h4 style={{color: props.color}}>{props.tags}</h4>
        <h6 style={{color: props.color}}>{props.index} of {props.length}</h6>
  </div>
);

export default Photo;
