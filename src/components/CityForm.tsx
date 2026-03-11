import { useState } from "react";
import type { CityRange } from "../types/CityRange";

interface Props {
    onAddCity: (city: CityRange) => void;
}

const CityForm = ({ onAddCity }: Props) => {
    const [city, setCity] = useState("");
    const [startCep, setStartCep] = useState("");
    const [endCep, setEndCep] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCity: CityRange = {
            city,
            startCep: Number(startCep),
            endCep: Number(endCep),
        };

        onAddCity(newCity);

        setCity("");
        setStartCep("");
        setEndCep("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar cidade</h2>

            <input
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <input
                placeholder="CEP inicial"
                value={startCep}
                onChange={(e) => setStartCep(e.target.value)}
            />

            <input
                placeholder="CEP final"
                value={endCep}
                onChange={(e) => setEndCep(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>    
    );
};

export default CityForm;