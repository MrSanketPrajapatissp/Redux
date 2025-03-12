import React from "react";
import "./App.css";
import About from "./screens/About";
import Register from "./screens/Register";
import UserList from "./screens/UserList";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import {createBrowserRouter, RouterProvider, } from "react-router-dom";



const router = createBrowserRouter([{
  path: "/register",
  element: <Register/>,
},{
  path: "/home",
  element: <div>Home page</div>
},
{
  path: "/user-list",
  element: <UserList/>
},]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
