import React, { useEffect, useState } from "react";
import { UserInterface } from "../../interfaces/user";
import { getAvaliableAppointaments } from "../../services/api";
import { errorHandler } from "../../utils/errors";

interface OwnProps {
  history: string[];
  getActors: () => Promise<UserInterface[]>
  actor: string
}

const Schedule = (props: OwnProps) => {
  const [selectedActor, setSelectedActor] = useState<string | undefined>()
  const [actors, setActors] = useState<UserInterface[]>([])

  const [hora, setHora] = useState('')
  const [data, setData] = useState('')

  const [disponivelDh, setDisponivelDh] = useState<{ data: string, horarios: string[] }[]>([])


  useEffect(() => {
      async function findActors() {
          try {
              setActors(await props.getActors())
          } catch (e) {
              errorHandler(e)
          }
      }

      findActors()

  }, [props])

  useEffect(() => {
    async function findAvaliableAppointaments() {
        try {
            setDisponivelDh(await getAvaliableAppointaments(selectedActor!))
        } catch (e) {
            errorHandler(e)
        }
    }

    if (selectedActor) findAvaliableAppointaments()
}, [selectedActor])


  return (
    <div className="schedule-data">
      <label className="form-label">{props.actor}:</label>
      <div className="select-container">
        <select
          value={selectedActor}
          onChange={(e) => setSelectedActor(e.target.value)}
        >
          <option hidden>{props.actor}</option>
          {actors.map((Actor) => {
            return (
              <option
                key={Actor.id}
                value={Actor.id}
              >{`${Actor.name} ${Actor.credentialType}: ${Actor?.credential}`}</option>
            );
          })}
        </select>
      </div>

      <label className="form-label">Data:</label>
      <input
        type="date"
        value={data}
        required={true}
        min={new Date().toDateString()}
        onChange={(e) => {
          console.log(e.target.value)
          if (disponivelDh.map((dh) => dh.data).includes(e.target.value))
            setData(e.target.value);
        }}
        placeholder="Data"
      />

      <label className="form-label">Horario:</label>
      <div className="select-container">
        <select value={hora} onChange={(e) => setHora(e.target.value)}>
          <option hidden>Hora</option>
          {disponivelDh
            .find((dh) => dh.data === data)
            ?.horarios.map((hr, index) => {
              return (
                <option key={hr} value={hr}>
                  {hr}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Schedule;
