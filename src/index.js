import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <HashRouter base='/'>
      <App />
      </HashRouter>
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)