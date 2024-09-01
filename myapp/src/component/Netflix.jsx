import React from 'react'
import card from '../api/data.json'
import {Netflixcard} from './Netflixcard'

const Netflix = () => {
  return (
      <ul>
      {card.map((curElem)=>(
        <Netflixcard key={curElem.id} data={curElem}/>
      ))}
    </ul>
  );
};

export default Netflix
