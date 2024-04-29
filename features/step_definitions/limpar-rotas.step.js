const { Given, Then } = require("cucumber");
const LimparRotasPage = require("../pages/limpar-rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

Given("clico no botão para limpar a rota manual", async function () {
    //TODO: Alinhamento: Os tres botões dessa sessão tem o mesmo ID.
    await LimparRotasPage.clearRoutesButtonClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("os campos de origem e destino manuais estarão vazios", async function () {
    //TODO: Implementar método assert para verificar se os campos estão vazios
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    return "pending";
});

//Cenário 2: Limpar rota através da pilha de rotas
Given("clico na aba de pilha rotas", async function () {
    await LimparRotasPage.routeStackMenuClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico em uma rota da pilha de rotas", async function () {
    await LimparRotasPage.selectRouteInRouteStack();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico no botão para limpar a rota selecionada", async function () {
    await LimparRotasPage.clearRoutesButtonClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then(
    "os campos de origem e destino selecionados estarão vazios",
    async function () {
        //TODO: Implementar método assert para verificar se os campos estão vazios
        return "pending";
    }
);
