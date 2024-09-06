// onClick: Triggered when a mouse click occurs.
// onDoubleClick: Triggered when a mouse double-click occurs.
// onMouseEnter: Triggered when the mouse pointer enters the element.
// onMouseLeave: Triggered when the mouse pointer leaves the element.
// onMouseMove: Triggered when the mouse pointer moves over the element.
// onMouseDown: Triggered when a mouse button is pressed on the element.
// onMouseUp: Triggered when a mouse button is released over the element.

import React from 'react'

const MouseEvent = () => {
    const clickHandler = () =>{
        console.log("Button is Clicked")
    }

    const doubleClickHandler = () =>{
        console.log("Double clicked")
    }

    const mouseEnterHandler= () =>{
        console.log("Mouse Entered")
    }

    const mouseLeaveHandler = () =>{
        console.log("Mouse Leave")
    }

    const mouseMoveHandler = () =>{
        console.log("Mouse Moved")
    }

    const mouseUpHandler = () =>{
        console.log("Mouse UP")
    }

    const mouseDownhandler = () =>{
        console.log("Mouse Down")
    }

  return (
    <div className='container'>
        <button className='btn-primary' onClick={clickHandler}>Onclick Button</button>
        <button className='btn-secondary' onDoubleClick={doubleClickHandler}>Double Click Button</button>
        <button className='btn-success' onMouseEnter={mouseEnterHandler}>Mouse Enter Button</button>
        <button className='btn-danger' onMouseLeave={mouseLeaveHandler}>Mouse Leave Button</button>
        <button className='btn-warning' onMouseMove={mouseMoveHandler}>Mouse Move Button</button>
        <button className='btn-info' onMouseUp={mouseUpHandler}> Mouse Up Button</button>
        <button className='btn-dark' onMouseDown={mouseDownhandler}>Mouse Down Button</button>
    </div>
  )
}

export default MouseEvent
