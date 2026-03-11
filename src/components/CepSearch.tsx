import { useState } from "react";
import type { CityRange } from "../types/CityRange";

interface Props {
    cities: CityRange[];
}

const CepSearch = ({ cities }: Props) => {
    const [cep, setCep] = useState("");
    const [result, setResult] = useState("");
    
    const handleSearch = () => {
        const cepNumber = Number(cep);

        const foundCity = cities.find(
            (c) => cepNumber >= c.startCep && cepNumber <= c.endCep
        );

        if (foundCity) {
            setResult(`O CEP pertence à cidade ${foundCity.city}`);
        } else {
            setResult("CEP não encontrado! :(");
        }
    };

    return (
        <div>
            <h2>Consultar CEP</h2>

            <input
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
            />

            <button onClick={handleSearch}>Buscar</button>

            <p className="result">{result}</p>
        </div>
    );
};

export default CepSearch;