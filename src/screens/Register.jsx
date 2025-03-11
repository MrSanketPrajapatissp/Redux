import React, { useEffect } from "react";
import "./Register.css";
import { useState } from "react";

function Register() {
  function HandleRegister(event) {
    event.preventDefault();
    console.log("hello World");
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [humanage, setHumanAge] = useState(133);

  function increaseAge(event) {
    event.preventDefault();
    setHumanAge(humanage + 1);
  }
  console.log(email);
  console.log(password);

  useEffect(() => {
    console.log("age : ", humanage);
  }, [humanage]);

  let age = 19;

  return (
    <form>
      {age > 18 ? (
        <div>
          <h1>{humanage}</h1>

          <input
            className="form-input"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="form-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={HandleRegister}>submit</button>
        </div>
      ) : (
        <div>
          <h1>You are under 18</h1>
        </div>
      )}
      <button onClick={increaseAge}>Increase</button>
    </form>
  );
}

export default Register;
