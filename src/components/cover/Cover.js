import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/2.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <div class="animated-title">
  <div class="text-top">
    <div>
      <span>Nahuel Grijalba</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>Front-End Developer</div>
  </div>
</div>
        </div>
    );
};

export default Cover


