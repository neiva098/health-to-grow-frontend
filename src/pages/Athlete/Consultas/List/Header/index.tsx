import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const HeaderList = (props: { history: string[] }) => {
  return (
    <div className="menu-items">
      <div className="group-header">
        <button
          className="icon"
          onClick={() => {
            props.history.push("/athlete/home");
          }}
        >
          <IoIosArrowBack size={18} color="#00AEED" />
          <p>Voltar</p>
        </button>
      </div>
      <div className="group-header">
        <p
          className="link-header"
          onClick={() => props.history.push("/athlete/consult/nutricionista/create")}
        >
          Agendar Nutricionista
        </p>
        <p
          className="link-header"
          onClick={() => props.history.push("/athlete/consult/personal/create")}
        >
          Agendar Personal
        </p>
      </div>
    </div>
  );
};

export default HeaderList;
