// onPlay: Triggered when media playback is started.
// onPause: Triggered when media playback is paused.
// onEnded: Triggered when media playback reaches the end.
import React from 'react';
import video from '../assets/Video.mp4'

function MediaEvents() {
  const handlePlay = () => console.log('Media Playing');
  const handlePause = () => console.log('Media Paused');
  const handleEnded = () => console.log('Media Ended');

  return (
    <video
      width="320"
      height="240"
      controls
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
    >
      <source src="video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default MediaEvents;
