import React from 'react';

import { Link } from 'react-router-dom';

import './TrainingStyles.css';

import Pod from '../assets/pod.jpg';
import Moon from '../assets/moon.jpg';

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, rem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          praesentium.
          <Link to="/contact">
            <button className="btn" styles={{ color: 'black' }}>
              Contact
            </button>
          </Link>
        </p>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack bootom">
            <img src={Pod} alt="" className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
