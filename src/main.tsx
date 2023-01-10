import "./main.css";

import { purple, teal } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// import App from "./App";
import router from "./Routes";
import { store } from "./stores/BaseStore";

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
      main: "#11cb5f",
    },
    error: {
      main: "#cb1177",
    },
  },
});

root.render(
  <StrictMode>
    {/* <App> */}
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
    {/* </App> */}
  </StrictMode>
);
