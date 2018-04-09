import React from 'react';
import ReactTooltip from 'react-tooltip';

const formatDate = date => {
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

const Photo = props => (
  <div>
        <a data-tip data-for='description'><img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.title}/></a>
        <ReactTooltip place='top' type='light' effect='float' id='description' aria-haspopup='true'>
          <h3>{props.title}</h3>
          <h4>{props.tags}</h4>
          <h4>{formatDate(new Date(props.datetaken))}</h4>
        </ReactTooltip>
        <h6>{props.index} of {props.length}</h6>
  </div>
);

export default Photo;
