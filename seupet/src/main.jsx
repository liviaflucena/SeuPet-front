// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Usando React 18+
import App from "./App";

// Cria uma raiz e renderiza o App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);