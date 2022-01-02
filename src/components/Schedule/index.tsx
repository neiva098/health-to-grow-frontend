import React, { useState } from "react";

interface OwnProps {
  history: string[];
}

const Schedule = (props: OwnProps) => {
  const [hora, setHora] = useState("");
  const [data, setData] = useState("");

  return (
    <div className="schedule-data">
      <div className="schedule-field">
        <p>Data:</p>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Data"
        />
      </div>
      <div className="schedule-field">
        <p>Horario:</p>
        <input
          type="time"
          value={hora}
          onChange={(e) => {
            if (["00", "30"].includes(e.target.value.substr(3, 2)))
              setHora(e.target.value);
          }}
          step="1800"
        />
      </div>
    </div>
  );
};

export default Schedule;
