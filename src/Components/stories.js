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

When he is unable to bear (tolerate or experience) the city life, he returns to his home but invites his friend to the village.

When his friend visits him, something similar happens.

What Is Great About It: Humans have been living without cities or villages for most of history.

That means that both village and city life are recent inventions. And just like every other invention, we need to decide their costs and benefits.

The story is precisely (exactly) about this debate. It is divided into short paragraphs and has illustrations for each scene. This is best for beginners who want to start reading immediately.
          </p>
        </div>
      </div>
  );
}

export default Stories;
