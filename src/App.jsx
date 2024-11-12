import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
