import React, { useState } from "react";
import useHealthcare from "../hooks/useHealthcare";

const AddPatientForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [medicalHistory, setMedicalHistory] = useState(null);
  const { patients, addPatients } = useHealthcare();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      id: patients.length + 1,
      name: name,
      age: age,
      medicalHistory: medicalHistory.split(",").map((item) => item.trim()),
    };
    addPatients(newPatient);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>AddPatientForm</h2>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.age)}
          />
        </div>
        <div>
          <input
            type="text"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
