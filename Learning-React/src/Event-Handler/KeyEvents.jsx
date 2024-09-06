// onKeyDown: Triggered when a key is pressed.
// onKeyPress: Triggered when a key is pressed and released.
// onKeyUp: Triggered when a key is released.

import React from 'react'

const KeyEvents = () => {
  const keyDownHandler = () => {
      console.log("key is Down");
  }

  const keyPressHandler = () => {
      console.log("Key is Pressed")
  }

  const keyUpHandler = () => {
      console.log("Key is Up")
  }

  return (
   
    <div>
      <input onKeyDown={keyDownHandler} onKeyPress={keyPressHandler} onKeyUp={keyUpHandler} placeholder='Key Down, press & Up Handler' type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
      
    </div>
  )
}

export default KeyEvents;
