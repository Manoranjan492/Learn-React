// onTouchStart: Triggered when a touch point is placed on the touch surface.
// onTouchMove: Triggered when a touch point is moved along the touch surface.
// onTouchEnd: Triggered when a touch point is removed from the touch surface.
// onWheel: Triggered when mouse wheel rolls, has deltaX that calculates only on X-axis and has deltaY which calculates on Y-axis only.

import React from 'react';

function TouchEvents() {
  const handleTouchStart = () => console.log('Touch Started');
  const handleTouchMove = () => console.log('Touch Moved');
  const handleTouchEnd = () => console.log('Touch Ended');
  
  const handleWheel = (event) => {
    console.log(`Wheel Delta: ${event.deltaX}`);
  };


  return (
    <button
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}
    >
      Touch me
    </button>
  );
}

export default TouchEvents;
