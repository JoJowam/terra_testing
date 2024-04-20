const { Given, When, Then } = require("cucumber");
const paginaRotas = require("../pages/rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

When("clico no botão de adicionar rota", async function () {
    await paginaRotas.addRoutesClick();
});

Then("a rota será adicionada em pilha de rotas", async function () {
    //TODO: Implementar método assert para verificar se a rota foi adicionada
    return "pending";
});
