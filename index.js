const { Cucumber } = require("cucumber");

async function runCucumberFeatures() {
    const cucumber = new Cucumber();
    const options = {
        dryRun: false,
        strict: true,
        stepDefinitions: ["./steps/**/*.js"],
    };

    await cucumber.runFeatures(["features/**/*.feature"], options);
}

runCucumberFeatures().catch((error) => {
    console.error("Erro ao executar os recursos do Cucumber:", error);
});

//Feitas:
//FIXME: Refatorar o index.js para que os arquivos .steps sejam lidos da pasta correta (steps);
//TODO: Criar arquivos .pages para cada arquivo .steps e migrar o codigo de automação para esses arquivos;
//TODO: Tranformar o Driver em SingleTon e compartilha-lo pelos arquivos .pages;

//Pendente
//TODO: Formatar saída no terminal ou implementar um relatorio de execução em HTML;
//TODO: Integrar codigos do Joaquim e concluir as rotinas de teste;
//TODO: Implementar métodos de assert para verificar se a rota foi traçada no mapa;
//TODO: Estudart a possibilidade de migrar ainda cedo de selenium para
//TODO: Estudar forma de selecionar ordem de execução dos testes;
