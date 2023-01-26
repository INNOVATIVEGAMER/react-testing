import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/counter";
import AppProvider from "./providers/app_providers";
import MuiMode from "./components/mui/mui_mode";

function App() {
  return (
    // <AppProvider>
    //   <MuiMode />
    // </AppProvider>
    <Counter />
  );
}

export default App;
