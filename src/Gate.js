import React from 'react';
import './index.css';

const Gate = ({isOpen}) => {
    return(
        <div>
            <br/>
            <h2>Gate Task</h2>
        <p id="gate"> Gate is <span>{isOpen === true ? "open" : "closed"}</span></p>
        </div>
    )
}

export default Gate