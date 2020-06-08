import React from 'react';
import './index.css';

function Task1(props) {
    return <div>
      <div className="header">
        <h1>REACT TASK 1</h1>
        <p id="name">by <br/>
           <strong>{props.name}</strong>
        </p>
     </div>
     <div className="bodyy">
       <p>Hey Coders! there are somethings you need to consider while you are becoming programmers: </p>
       <ul className="list">
         <li>
           Get the basics right.
         </li>
         <li>
           Build Patience.
         </li>
         <li>
           Set a goal and move towards it.
         </li>
         <li>
           Do more projects
         </li>
       </ul>
  
  <p>Excited enough? Don't worry I've got some best sites to start learning coding. Here they are:</p>
  <ol className="list">
    <li>freeCodeCamp</li>
    <li>Coursea</li>
    <li>edX</li>
    <li>W3Schools</li>
    <li>TopCoder</li>
    <br/>
  </ol>
  </div>
  
  <div className="footer">
  <p>Only if you're able to build a static page after two weeks i'll give you {2+6} out of 10 </p>
  </div>
  
  <br/>
  <br/>
  </div>
  }

  export default Task1