const { When, Then } = require("cucumber");
const ExcluirRotasPage = require("../pages/excluir-rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

When("clico no botão de lixeira", async function () {
    await ExcluirRotasPage.deleteRoutesButtonClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota é excluída da pilha de rotas", async function () {
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    return "pending";
});
