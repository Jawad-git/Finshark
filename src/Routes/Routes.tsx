import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import ErrorPage from "../pages/errorElement/ErrorPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import DesignPage from "../pages/DesignPage/DesignPage";
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
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "design",
        element: <DesignPage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
