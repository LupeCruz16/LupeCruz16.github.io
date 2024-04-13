import React from 'react';
import '../css/details.css';
import { six, museum, taylort_swift, max, zoo, cat_display } from '../../../assets/Images.js';

function Details() {
  return (
    <>
      <div className="text-m details-title">My Recent Adventures</div>

      {/* Bento Box Grid of Images */}
      <div className="details-container">
      <div className="details-image-item large-item">
      <img src={taylort_swift} alt="Concert" />
      </div>
      <div className="details-image-item">
      <img src={max} alt="Museum" />
      </div>
      <div className="details-image-item tall-item">
      <img src={zoo} alt="Disney" />
      </div>
      <div className="details-image-item">
      <img src={cat_display} alt="Concert Repeat" />
      </div>
      <div className="details-image-item">
      <img src={six} alt="Museum Repeat" />
      </div>
      <div className="details-image-item large-item">
      <img src={museum} alt="Disney Repeat" />
      </div>
      </div>
    </>
  );
}

export default Details;
