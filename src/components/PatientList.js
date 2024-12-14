import React from "react";
import useHealthcare from "../hooks/useHealthcare";

const PatientList = () => {
  const healthCareContext = useHealthcare();

  const { patients } = healthCareContext;
  return (
    <div>
      <h2>PatientList</h2>
      <ul>
        {patients &&
          patients?.length > 0 &&
          patients.map((patient) => (
            <li key={patient.id}>
              {patient.name}-{" "}
              {patient.medicalHistory?.map((cond) => `${cond},`)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PatientList;
