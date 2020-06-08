import React from 'react';
import './index.css';
import Task1 from './Task1.js'
import MediaCard from './MediaCard.js'
import Gate from './Gate.js'
import northernImg from './aurora-1185464_1920.jpg';

function App() {
  return (
    <div>
      <Task1 name="Arshia Saleem"/>
      <MediaCard title="Northern Lights" body="This image of Northern Lights
       is captured in Norway" imageUrl={northernImg}/>
      <Gate isOpen = {true}/>
    </div>
  )
}

export default App;
