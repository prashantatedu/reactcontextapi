import { useContext } from "react";
import { HealthcareContext } from "../components/context/HeathcareContext";

const useHealthcare = () => {
  return useContext(HealthcareContext);
};

export default useHealthcare;
