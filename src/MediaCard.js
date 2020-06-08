import React from 'react';
import './index.css';

const MediaCard = (props) => {
  const {title, body, imageUrl} = props
    return(
<div>
<h1>REACT TASK 2</h1>
<h2>{title}</h2>
<p>{body}</p>
<img src={imageUrl} alt="Northern Lights"/>
</div>
    ) 
}

export default MediaCard