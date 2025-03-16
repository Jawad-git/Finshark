import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import ErrorPage from "../pages/errorElement/ErrorPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import DesignPage from "../pages/DesignPage/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "design",
        element: <DesignPage />,
      },
      {
        path: "company/:ticker",
        element: (
          <ProtectedRoute>
            <CompanyPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
          },
          {
            path: "balance-sheet",
            element: <BalanceSheet />,
          },
          {
            path: "cashflow-statement",
            element: <CashFlowStatement />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
