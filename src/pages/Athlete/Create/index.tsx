import React, { FormEvent, useState } from "react";

import { MdLibraryBooks } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { errorHandler } from "../../../utils/errors";
import { createUser, getNutricionistas, getPersonais } from "../../../services/api";
import Schedule from "../../../components/Schedule";

const CreateAthlete = (props: { history: string[] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [consultaNutricionista, setConsultaDataNutri] = useState<any>(undefined)
  const [consultaPersonal, setConsultaDataPersonal] = useState<any>(undefined)

  function setConsultaNutricionista(data: string, hora: string, codigoEspecialista: string) {
    const dateTime = new Date(`${data}T${hora}:00.000-03:00`).toISOString()

    setConsultaDataNutri({
      codigoEspecialista,
      dateTime
    })

    return consultaNutricionista
  }

  function setConsultaPersonal(data: string, hora: string, codigoEspecialista: string) {
    const dateTime = new Date(`${data}T${hora}`).toISOString()

    console.log(dateTime)

    setConsultaDataPersonal( {
      codigoEspecialista,
      dateTime
    })

    return consultaPersonal
  }


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
     await createUser({
        name,
        email,
        password,
        atletaProfile: {
          consultas: [
            consultaNutricionista,
            consultaPersonal
          ]
        }
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
            Para se cadastrar precisamos que você preencha algumas informações e
            marque os horários com profissionais.
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

  
          <Schedule history={props.history}actor='Nutricionista' getActors={getNutricionistas} setSchedule={setConsultaNutricionista} />

          <Schedule history={props.history} actor='Personal' getActors={getPersonais}  setSchedule={setConsultaPersonal}  />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAthlete;
