import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import SearchContext from "./context/SearchContext";
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContext>
        <App />
      </SearchContext>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
