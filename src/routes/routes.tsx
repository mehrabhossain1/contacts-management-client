import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import AddContacts from "../pages/AddContacts";
import AllContacts from "../pages/AllContacts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-contacts",
        element: <AddContacts />,
      },
      {
        path: "/all-contacts",
        element: <AllContacts />,
      },
    ],
  },
]);

export default router;
