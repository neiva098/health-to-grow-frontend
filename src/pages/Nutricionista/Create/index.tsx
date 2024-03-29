import React, { FormEvent, useState } from "react";

import { MdLibraryBooks } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { errorHandler } from "../../../utils/errors";

import { createNutricionista } from "../../../services/api";

const CreateNutricionista = (props: { history: string[] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [crn, setCrn] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await createNutricionista({
        name,
        email,
        password,
        credential: crn,
      });

      props.history.push("/");
    } catch (e) {
      errorHandler(e);
    }
  }
  return (
    <div className="container">
      <div className="form-content">
        <section className="form-description">
          <MdLibraryBooks size={150} className="icon"></MdLibraryBooks>
          <h1>Cadastre-se</h1>
          <p>
            Para se cadastrar precisamos que você preencha algumas informações,
            incluindo o cadastro no conselho regional de nutricionistas, sua
            conta será liberada depois da checagem do cadastro.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao login
          </Link>
        </section>

        <form
          className="data-container"
          onSubmit={async (e) => await handleSubmit(e)}
        >
          <input
            placeholder="Nome do usuário"
            value={name}
            required={true}
            minLength={3}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          ></input>
          <input
            placeholder="Email do usuário"
            value={email}
            required={true}
            type="email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          ></input>
          <input
            placeholder="Senha do usuário"
            value={password}
            type="password"
            minLength={5}
            min={5}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          ></input>

          <input
            placeholder="Cadastro CRN"
            value={crn}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setCrn(event.target.value)
            }
          ></input>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNutricionista;
