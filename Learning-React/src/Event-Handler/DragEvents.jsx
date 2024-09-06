// onDrag: Triggered when an element is being dragged.
// onDragStart: Triggered when the user starts dragging an element.
// onDragEnd: Triggered when the user stops dragging an element.
// onDragOver: Triggered when a dragged element is over a drop target.
// onDrop: Triggered when a dragged element is dropped on a drop target.
import React from 'react';

function DragEvents() {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'This is a drag event');
    console.log('Drag Started');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    console.log('Dropped: ', data);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log('Dragging Over');
  };

  const dragEndHandler = () => {
    console.log("Drag End");
  }

  const dragHandler = () => {
    console.log("Drag initiated")
  }

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart} onDrag={dragHandler} onDragEnd={dragEndHandler}
        style={{ width: '100px', height: '100px', backgroundColor: 'lightcoral' }}
      >
        Drag me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ width: '100px', height: '100px', backgroundColor: 'lightgreen', marginTop: '20px' }}
      >
        Drop here
      </div>
    </div>
  );
}

export default DragEvents;
