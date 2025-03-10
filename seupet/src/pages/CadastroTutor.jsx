import React, { useState } from "react";
import "../styles/CadastroTutor.css";

const CadastroTutor = () => {
  const [tutor, setTutor] = useState({
    name: "",
    documentos: "",
    email: "",
    endereco_id: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutor({ ...tutor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tutor);
  };

  return (
    <div className="cadastro-tutor-container">
      <header className="header">
        <img src="/logo.png" alt="SeuPet Logo" className="logo" />
      </header>
      <nav className="nav-menu">
        <a href="/" className="nav-link">Home</a>
        <a href="/cadastro-tutor" className="nav-link">Perfil Humano</a>
        <a href="/cadastro-animal" className="nav-link">Perfil Pet</a>
        <a href="/login" className="nav-link">Acompanhamento</a>
      </nav>
      <main className="main-content">
        <h2>Cadastro do Tutor</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Nome:
            <input type="text" name="name" value={tutor.name} onChange={handleChange} />
          </label>
          <label>
            Documentos:
            <input type="text" name="documentos" value={tutor.documentos} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={tutor.email} onChange={handleChange} />
          </label>
          <label>
            Endereço ID:
            <input type="text" name="endereco_id" value={tutor.endereco_id} onChange={handleChange} />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <footer className="footer">
        <p>Entre em contato com a gente!</p>
        <div className="contact-links">
          <a href="#" className="contact-link">Instagram</a>
          <a href="#" className="contact-link">Email</a>
          <a href="#" className="contact-link">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
};

export default CadastroTutor;