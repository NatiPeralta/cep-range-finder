import { useState, useEffect } from "react";
import type { CityRange } from "./types/CityRange";
import CityForm from "./components/CityForm";
import CityList from "./components/CepList";
import CepSearch from "./components/CepSearch";

function App() {
  const [cities, setCities] = useState<CityRange[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const storedCities = localStorage.getItem("cities");

    if (storedCities) {
      setCities(JSON.parse(storedCities));
    }
  }, []);

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}, [darkMode]);

  useEffect(() => {
  localStorage.setItem("cities", JSON.stringify(cities));
}, [cities]);

  const addCity = (city: CityRange) => {
    setCities([...cities, city]);
  };

  const deleteCity = (index: number) => {
  const updatedCities = cities.filter((_, i) => i !== index);
  setCities(updatedCities);
};

  return (
   <div className="container">
      <h1>Simfrete Desafio</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Modo claro ☀️" : "Modo escuro 🌙"}
      </button>
      <p className="subtitle" style={{textAlign: "center", marginBottom: "20px"}}>
      Ferramenta para identificar a cidade a partir de uma faixa de CEP.
      </p>

    <div className="card">
    <CityForm onAddCity={addCity} />
    </div>

    <div className="card">
      <CityList cities={cities} onDelete={deleteCity} />
    </div>
      
    <div className="card">
      <CepSearch cities={cities} />
    </div>
   </div>
  );
}

export default App;