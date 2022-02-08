import React, { FormEvent } from "react";
import { AiFillClockCircle } from "react-icons/ai";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Schedule from "../../../../components/Schedule";
import { getPersonais } from "../../../../services/api";
import { errorHandler } from "../../../../utils/errors";

const AgendarPersonal = (props: { history: string[] }) => {

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      // cria consulta

      props.history.push("/athlete/consults");
    } catch (e) {
      errorHandler(e);
    }
  }
  return (
    <div className="container">
      <div className="form-content">
        <section className="form-description">
          <AiFillClockCircle size={150} className="icon"></AiFillClockCircle>
          <h1>Agende</h1>
          <p>
            Defina o profissional a data e a hora da consulta.
          </p>
          <Link className="back-link" to="/athlete/consults">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar à listagem
          </Link>
        </section>

        <form
          className="data-container"
          onSubmit={async (e) => await handleSubmit(e)}
        >
          <Schedule history={props.history}actor='Personal' getActors={getPersonais} setSchedule={undefined!}/>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgendarPersonal;
