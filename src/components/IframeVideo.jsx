import React from "react";
import "../css/IframeVideo.css";

const IframeVideo = ({param}) => {
  console.log(param);
  return (
    <div>
      <div id="iframe-container">
        <iframe
          src={`http://nodelaytv.pw/${param}`}
        ></iframe>
      </div>
      {param}
    </div>
  );
};

export default IframeVideo;
