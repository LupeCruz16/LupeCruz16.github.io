import React from 'react';
import '../css/bento.css';
import { six, museum, taylort_swift, max, zoo, cat_display } from '../../../assets/Images.js';

function BentoBox() {
  return (
    <>
      <div className="text-m bento-title">My Recent Adventures</div>
      <div className="bento-container">
        <div className="bento-image-item large-item">
          <img src={taylort_swift} alt="Concert" />
        </div>
        <div className="bento-image-item">
          <img src={max} alt="Museum" />
        </div>
        <div className="bento-image-item tall-item">
          <img src={zoo} alt="Disney" />
        </div>
        <div className="bento-image-item">
          <img src={cat_display} alt="Concert Repeat" />
        </div>
        <div className="bento-image-item">
          <img src={six} alt="Museum Repeat" />
        </div>
        <div className="bento-image-item large-item">
          <img src={museum} alt="Disney Repeat" />
        </div>
      </div>
    </>
  );
}

export default BentoBox;
