import React from 'react';
import '../css/details.css';
import { concert, museum, disney } from '../../../assets/Images.js';

function Details() {
  return (
    <>
        <div className="text-m padding-bottom-m">
            My Recent Adventures
        </div>

        {/* Bento Box Grid of Images */}
        <div className="details-container">
        <div className="details-image-item large-item">
        <img src={concert} alt="Concert" />
        </div>
        <div className="details-image-item">
        <img src={museum} alt="Museum" />
        </div>
        <div className="details-image-item tall-item">
        <img src={disney} alt="Disney" />
        </div>
        <div className="details-image-item">
        <img src={concert} alt="Concert Repeat" />
        </div>
        <div className="details-image-item">
        <img src={museum} alt="Museum Repeat" />
        </div>
        <div className="details-image-item large-item">
        <img src={disney} alt="Disney Repeat" />
        </div>
        </div>
    </>
  );
}

export default Details;
