import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 (9/16 = 0.5625) */
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function VideoYT() {
  return (
    <VideoWrapper>
      <iframe
        src="https://www.youtube.com/embed/gJ66MwIb_HA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </VideoWrapper>
  );
}
