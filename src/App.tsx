import React from "react";

import "./App.css";
import Snackbar from "component/organisms/snackbar/Snackbar";
import { RouterProvider } from "react-router-dom";
import { MasterRouter } from "router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={MasterRouter} />
      <Snackbar />
    </div>
  );
}

export default App;
