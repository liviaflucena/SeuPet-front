import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
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
        <h2>Boas-vindas ao SeuPet!</h2>
        <p>
          Aqui você poderá fazer registros e acompanhar como anda o quadro vacinal do seu
          amiguinho, assim como receber lembretes sobre as próximas vacinas.
        </p>
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

export default Home;