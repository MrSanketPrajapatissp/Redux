import React, { useMemo } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Title from "../components/Title";
import { useSelector } from "react-redux";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

function Register() {
  const value = useSelector((state) => state.counter?.value || 0);

  const [count, setCount] = useState(0);

  const [todo, setTodos] = useState([]);
  const Calculation = useMemo(() => expensiveCalculation(count), [count]);
  const navigate = useNavigate();

  const addTodo = () => {
    setTodos((t) => [...t, "Todo Task"]);
  };

  function increment() {
    setCount(count + 1);
  }

  function goToUserList() {
    navigate("/user-list");
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        <h3>{value}</h3>
        {todo.map((todo, index) => (
          <Title key={index} name={todo} />
        ))}
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
      <Link to="/contact">go to contact</Link>
    </div>
  );
}
export default Register;
