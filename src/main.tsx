import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';
// import App from "./App";
import router from "./Routes";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    }
  },
});


root.render(
  <StrictMode>
    {/* <App> */}
    <RouterProvider router={router} />
    {/* </App> */}
  </StrictMode>
);
