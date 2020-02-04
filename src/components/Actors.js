import React from 'react';
import { actors } from '../data';

const Actor = ({ name, movies}) =>{
<div className='actor' key={name}>
  <h1> Name: {name} </h1>
    <p1> Movies: </p1>
      <ul>
        {movies.map(movieData => <li> {movieData}</li>)}
      </ul>
</div>
}

const Actors = () => {
 return (
    <div>
      <h1>Actors</h1>
    {actors.map(Actor)}
    </div>
  );
  }



export default Actors;
