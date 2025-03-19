import React from "react";
import { increment, decrement } from "../store/actions"; // ✅ Correct import
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // ✅ Correct import

function Contact() {
  const value = useSelector((state) => state.counter?.value ?? 0);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment(5));
          console.log("state updated!");
        }}
      >
        Increment by 5
      </button>

      <button
        onClick={() => {
          dispatch(decrement(5));
          console.log("state updated!");
        }}
      >
        Decrement by 5
      </button>

      <h4>{value}</h4>

      <Link to="/register">Go to Register Page</Link>
    </div>
  );
}

export default Contact;
