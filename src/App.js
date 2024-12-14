import "./App.css";
import AddPatientForm from "./components/AddPatientForm";
import HealthcareProvider from "./components/context/HeathcareContext";
import PatientList from "./components/PatientList";

function App() {
  return (
    <HealthcareProvider>
      <div style={{ margin: "auto", width: "400px", maxWidth: "500px" }}>
        <PatientList />
        <AddPatientForm />
      </div>
    </HealthcareProvider>
  );
}

export default App;
