import React from 'react';
import { movies } from '../data';

class Movies extends React.Component{

  render(){
      return (
     <div>
        <h1> Movies Page </h1>
        <h2> Movie Title </h2>
        <h3>MovieTime </h3>
          <ul> Genre </ul>
     </div>
   );
  }
}

export default Movies;
