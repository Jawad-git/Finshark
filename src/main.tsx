import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
// clean the project,
// refractor store by breaking up cart into its own component,  --------------- DONE
// add comments, and deploy

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
