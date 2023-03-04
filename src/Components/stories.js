import React from 'react';
import './stories.css';
import img1 from '../assets/1.jpg';

function Stories() {
  return (
    <div className="story-div">
      <div className='title'>
        <h3>1. The Night Train at Deoli</h3>
        </div>
        <div className='img-div'>
          <figure>
          <img className='image' src={img1} alt='img' ></img>
          <figcaption>
          The Night Train at Deoli
          </figcaption>
          </figure>
          </div>
          <div className='story'>
            <span>12.11.2023</span>
            <span>12000</span>
            <p>
            Timmie Willie is a country mouse who is accidentally taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and makes a friend.
          </p>
        </div>
      </div>
  );
}

export default Stories;
