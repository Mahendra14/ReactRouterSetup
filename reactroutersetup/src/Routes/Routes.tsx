import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutPage from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about/:number",
        element: <AboutPage />,
        children: [
        //   { path: "14", element: <Home /> },
        ],
      },
    ],
  },
]);