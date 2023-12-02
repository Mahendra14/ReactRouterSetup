import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/MyProfile";
import AboutPage from "../pages/Contacts";

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