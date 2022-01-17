import React from "react";

import { MdLibraryBooks } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const CreateUser = (props: { history: string[] }) => {
  return (
    <div className="container">
      <div className="form-content">
        <section className="form-description">
          <MdLibraryBooks size={150} className="icon"></MdLibraryBooks>
          <h1>Cadastre-se</h1>
          <p>
            Caso você seja um atleta você deve cadastrar seu perfil e agendar
            consultas com os profissionais e obter o acesso à plataforma, caso
            você seja um profissional, associe-se na nossa plataforma e gerencie
            e preste um serviço diferenciado aos seus clientes.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao login
          </Link>
        </section>

        <div className="data-container">
          <button
            className="button"
            onClick={() => props.history.push("/registry/atleta")}
          >
            Atleta
          </button>
          <button
            className="button"
            onClick={() => props.history.push("/registry/nutricionista")}
          >
            Nutricionista
          </button>
          <button
            className="button"
            onClick={() => props.history.push("/registry/personal")}
          >
            Personal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
