import React, { useEffect, useState } from "react";

const UseState = () => {

    const [count, setCount] = useState(0);

    const [data, setData] = useState({
        username: "",
        email: "",
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        
        setData((prev) => {
        return { ...prev, [name]: value };
        });
    };

    const increase=()=>{
        setCount(count+1);
        document.title= `You Clicked ${count} times`
        useEffect(()=>{  
            // document.title= `You Clicked ${count} times`
        })
    }

  return (
    <>
        <div className="container mt-3">
            {/* //logic for counter */}
            <span>
                <button onClick={increase}>Increase</button> &nbsp; &nbsp;&nbsp;&nbsp;
                {count}                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>setCount(count-1) }>Decrease</button>
            </span>
        </div>
      <form>
        <div className="mx-auto">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
        </div>

        <div className="mx-auto">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={data.email}
            name="email"
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <h4>
          Entered User name : {data.username} and Email id is: {data.email}{" "}
        </h4>
      </form>
    </>
  );
};

export default UseState;
