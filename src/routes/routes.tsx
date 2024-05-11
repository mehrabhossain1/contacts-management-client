import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import AddContacts from "../pages/AddContacts";
import AllContacts from "../pages/AllContacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
