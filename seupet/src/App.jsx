// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroTutor from "./pages/CadastroTutor";
import CadastroAnimal from "./pages/CadastroAnimal";
import LoginTutor from "./pages/LoginTutor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-tutor" element={<CadastroTutor />} />
        <Route path="/cadastro-animal" element={<CadastroAnimal />} />
        <Route path="/login" element={<LoginTutor />} />
      </Routes>
    </Router>
  );
};

export default App;