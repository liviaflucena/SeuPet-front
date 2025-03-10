import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginTutor = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Login do Tutor</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha:</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginTutor;