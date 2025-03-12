import React, { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

function Register() {
  const [count, setCount] = useState(0);

  const [redirect, setRedirect] = useState(false);

  const [todo, setTodos] = useState([]);
  const Calculation = useMemo(() => expensiveCalculation(count), [count]);
  // const navigate = useNavigate();
  const addTodo = () => {
    setTodos((t) => [...t, "Todo Task"]);
  };

  function increment() {
    setCount(count + 1);
  }

  function goToUserList() {
    setRedirect(true);
    // navigate("/user-list");
  }

  if (redirect) {
    <Navigate to="/user-list"></Navigate>;
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todo.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {Calculation}
      </div>
      <Link to="/user-list">Take me to user List screen</Link>
      <button onClick={goToUserList}>Go to user List</button>
    </div>
  );
}
export default Register;


