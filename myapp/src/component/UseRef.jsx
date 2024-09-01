//Writing to show the use of useRef hook.

import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(10);
    console.log(inputRef.current);

    const changeColor =() =>{
        inputRef.current.style.backgroundColor= "#1020ff"
    }

  return (
    <div className='container'>
      <textarea placeholder='Enter the details' rows={3} cols={100} ref={inputRef}/><br/>
      <button className='btn-primary mx-10' onClick={changeColor}>Submit</button>
    </div>
  )
}

export default UseRef

