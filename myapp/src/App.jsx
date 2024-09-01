import { useState } from "react";
import Netflix from "./component/Netflix.jsx";
import UseState from "./component/UseState.jsx";
import UseRef from "./component/UseRef.jsx";

function App() {
    return(
      <>
      <UseState/>
      <UseRef/>
      {/* <Netflix/> */}
      {/* Counter App 
      <h3>Hello Word</h3>
      <button onClick={incrementor}>Count: {count}</button> */}
      {/* {count==true ?
      <form>
        <div className="mb-3">
          <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlhtmlhtmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getEmail}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlhtmlhtmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" onClick={incrementor} className="btn btn-primary">
          Submit
        </button>
      </form> : <Info /> } */}
    </>
  );
}

export default App;
