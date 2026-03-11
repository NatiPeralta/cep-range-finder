import * as readlineSync from 'readline-sync';

const ProjectShipping = () => {

    const listCity: string[] = [];
    const listCep: number[] = [];
    const listCep2: number[] = [];

    while (true) {
        const city = readlineSync.question("Cadastre uma cidade (digite -- para parar): ");
        if (city === "--") break;

        const cep1 = Number(readlineSync.question("CEP inicial: "));
        const cep2 = Number(readlineSync.question("CEP final: "));

        listCity.push(city);
        listCep.push(cep1);
        listCep2.push(cep2);
    }
   
    const searchCep = Number(readlineSync.question("Qual CEP você deseja consultar? "));
    let found = false;

    for (let i = 0; i < listCity.length; i++) {
        if (searchCep >= listCep[i] && searchCep <= listCep2[i]) {
            console.log(`Esse CEP pertence à cidade ${listCity[i]}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("CEP não encontrado em nenhuma cidade cadastrada :(");
    }
      
};

export default ProjectShipping;