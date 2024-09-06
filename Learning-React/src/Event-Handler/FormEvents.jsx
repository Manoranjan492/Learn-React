// onChange: Triggered when the value of an element changes.
// onSubmit: Triggered when a form is submitted.
// onFocus: Triggered when an element gains focus.
// onBlur: Triggered when an element loses focus.
import React from 'react'

const FormEvents = () => {
    const changeHandler = () => {
        console.log("Value changed inside input...")
    }

    const focusHandler = () => {
        console.log("Focus Enabled")
    }

    const blurHandler = () => {
        console.log("Blur Enabled");
    }

    const submitHandler = () => {
        console.log("Form Submitted");
    }

    return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
            Email address:
            <input onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default FormEvents
