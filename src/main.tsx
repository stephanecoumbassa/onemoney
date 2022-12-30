import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "./App";
import router from "./Routes";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    {/* <App> */}
    <RouterProvider router={router} />
    {/* </App> */}
  </StrictMode>
);
