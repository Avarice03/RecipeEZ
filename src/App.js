import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Timer from "./components/pages/Timer";
import Recipes from "./components/pages/Recipes";


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {path: "recipes", element: <Recipes />},
        {path: "timer", element: <Timer/>},
        {path: "about-this-app", element:<About />},
        {path: "contact-me", element: <Contact/>},
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
