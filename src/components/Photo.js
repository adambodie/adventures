import React from 'react';

const Photo = ({id, category, title, color, index, length}) => (
  <div>
        <a data-tip data-for='description'><img src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/images/${category}/${id}_o.jpg`} alt={title}/></a>
          <h3>{title}</h3>
        <h6 style={{color: color}}>{index} of {length}</h6>
  </div>
);

export default Photo;
