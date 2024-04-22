const { Given, When, Then } = require("cucumber");
const SalvarRotasPage = require("../pages/salvar-rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

When("clico no botão de adicionar rota", async function () {
    await SalvarRotasPage.addRoutesClick();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será adicionada em pilha de rotas", async function () {
    //TODO: Implementar método assert para verificar se a rota foi adicionada
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    return "pending";
});
