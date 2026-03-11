import type { CityRange } from "../types/CityRange";

interface Props {
    cities: CityRange[];
    onDelete: (index: number) => void;
}

const CityList = ({ cities, onDelete }: Props) => {
    return (
        <div>
            <h2>Cidades cadastradas</h2>

            <ul>
                {cities.map((c, index) => (
                    <li key={index}>
                        {c.city} - {c.startCep} até {c.endCep}

                        <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => onDelete(index)}
                            >
                            Remover
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;