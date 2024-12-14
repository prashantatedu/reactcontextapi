import { createContext, useState } from "react";

export const HealthcareContext = createContext();

const dummypatients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    medicalHistory: ["Diabetes", "Hypertension"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    medicalHistory: ["Asthma", "Knee Pain"],
  },
];

export default function HealthcareProvider({ children }) {
  const [patients, setPatientData] = useState(dummypatients);

  const addPatients = (newPatient) => {
    setPatientData([...patients, newPatient]);
  };

  const getPatients = (patientId) => {
    return patients.find((patient) => patient.id === patientId) || null;
  };

  return (
    <HealthcareContext.Provider value={{ patients, addPatients, getPatients }}>
      {children}
    </HealthcareContext.Provider>
  );
}
