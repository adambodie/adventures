import React from 'react';
import ReactTooltip from 'react-tooltip';

const formatDate = date => {
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

const Photo = ({farm, server, id, secret, title, tags, datetaken, color, index, length}) => (
  <div>
        <a data-tip data-for='description'><img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`} alt={title}/></a>
        <ReactTooltip place='top' type='light' effect='float' id='description' aria-haspopup='true'>
          <h3>{title}</h3>
          <h4>{tags}</h4>
          <h4>{formatDate(new Date(datetaken))}</h4>
        </ReactTooltip>
        <h6 style={{color: color}}>{index} of {length}</h6>
  </div>
);

export default Photo;
