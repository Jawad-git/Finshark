import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import ErrorPage from "../pages/errorElement/ErrorPage";
import SearchPage from "../pages/SearchPage/SearchPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
