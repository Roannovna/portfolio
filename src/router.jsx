import { createBrowserRouter } from "react-router";
import Home from "@/pages/home/index";
import Contacts from "@/pages/contacts/index";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default Router;
