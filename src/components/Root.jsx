import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/resultReducer";
import '../styles/Root.css';

const Root = () => {
    const inputRef = useRef(null); // we can access what's in the input feild now with this variable
    const dispatch = useDispatch()
    const startQuiz = () => {
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
  
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>Rule No 1</li>
        <li>Rule No 2</li>
        <li>Rule No 3</li>
        <li>Rule No 4</li>
        <li>Rule No 5</li>
      </ol>

      <form id="form" action="submit">
        <input ref={inputRef} type="text" placeholder="username*" className="userid"/>
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>Start Quiz</Link>
      </div>
    </div>
  );
};

export default Root;
