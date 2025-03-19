import React from "react";
import "./App.css";
import About from "./screens/About";
import Register from "./screens/Register";
import UserList from "./screens/UserList";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./screens/Contact";
import { store, persistor } from "./store/store"; // ✅ Fixed Import

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to Home Page</div>, // ✅ Added Default Route
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <div>Home page</div>,
  },
  {
    path: "/user-list",
    element: <UserList />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
