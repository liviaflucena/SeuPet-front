import React, { useState } from "react";
import "../styles/CadastroAnimal.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CadastroAnimal = () => {
  const [animal, setAnimal] = useState({
    name: "",
    data_nascimento: "",
    especie: "",
    raca: "",
    peso: "",
    porte: "",
    pelagem: "",
    cadastro: "",
    foto: "",
    tutor_id: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(animal);
  };

  return (
    <div className="cadastro-animal-container">
      <Navbar />
      <main className="main-content">
        <h2>Cadastro do Animal</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Nome:
            <input type="text" name="name" value={animal.name} onChange={handleChange} />
          </label>
          <label>
            Data de Nascimento:
            <input type="date" name="data_nascimento" value={animal.data_nascimento} onChange={handleChange} />
          </label>
          <label>
            Espécie:
            <input type="text" name="especie" value={animal.especie} onChange={handleChange} />
          </label>
          <label>
            Raça:
            <input type="text" name="raca" value={animal.raca} onChange={handleChange} />
          </label>
          <label>
            Peso:
            <input type="number" name="peso" value={animal.peso} onChange={handleChange} />
          </label>
          <label>
            Porte:
            <input type="text" name="porte" value={animal.porte} onChange={handleChange} />
          </label>
          <label>
            Pelagem:
            <input type="text" name="pelagem" value={animal.pelagem} onChange={handleChange} />
          </label>
          <label>
            Cadastro:
            <input type="text" name="cadastro" value={animal.cadastro} onChange={handleChange} />
          </label>
          <label>
            Foto:
            <input type="text" name="foto" value={animal.foto} onChange={handleChange} />
          </label>
          <label>
            Tutor ID:
            <input type="text" name="tutor_id" value={animal.tutor_id} onChange={handleChange} />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CadastroAnimal;