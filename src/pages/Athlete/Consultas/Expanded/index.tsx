import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../../../components/Header";
import { IAppointament } from "../../../../interfaces/appointaments";
import DetailAgendamento from "./Detail";
import AgendamentoDetailsHeader from "./Header";
import ExpandedAgendamentoMenu from "./Menu";


const ExpandedAgendamento = (props: RouteComponentProps) => {
  const [agendamento, setAgendamento] = useState<IAppointament>({} as any);
  const [service, setService] = useState<"details">(
    "details"
  );
  useEffect(() => {
    async function findAgendamento() {
      const { id }: any = props.match.params;

      setAgendamento({
          specialist: 'teste',
      } as any);
    }

    findAgendamento();
  }, [props.match.params, service]);

  function getSelectedComponent() {
    switch (service) {
      case "details":
        return (
          <DetailAgendamento
            history={props.history as any}
            agendamento={agendamento}
          />
        );
      default:
        return <div />;
    }
  }

  return (
    <div className="container">
      <Header
        Component={AgendamentoDetailsHeader}
        componentProps={{ history: props.history }}
      />
      <div className="details-container">
        <ExpandedAgendamentoMenu
          setService={setService}
          service={service}
          agendamento={agendamento}
        />
        <div className="selected-service">{getSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default ExpandedAgendamento;
