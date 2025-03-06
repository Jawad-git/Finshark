import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./index.css";
import {searchCompanies} from "./api";
// clean the project,
// refractor store by breaking up cart into its own component,  --------------- DONE
// add comments, and deploy

const router = createBrowserRouter(routes);

console.log(searchCompanies("tsla"));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
