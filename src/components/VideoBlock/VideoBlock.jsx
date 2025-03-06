import React from 'react';
import './videoBlock.css';
import { Play } from '../Icons/Icons.jsx';

const VideoBlock = ({ blockQuantity = 1 }) => {
  return (
    <div className="video_block">
      <div className="video-box">
        {blockQuantity > 1 && (
          <span className='quantity'>{blockQuantity} Videos</span>
        )}
        {Array.from({ length: blockQuantity}).map((_, index) => (
          <div className="video-card" key={index}>
            <div className="video">
              <Play className="play" />
            </div>
            <div className="video-title">
              <p className="title">My video</p>
              <p className="video-description">Video description</p>
            </div>
            <label className="heart-container">
              <input type="checkbox" />
              <svg
                id="Layer_1"
                version="1.0"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
              </svg>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBlock;
