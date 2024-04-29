const { Given, When, Then } = require("cucumber");
const InverterRotasPage = require("../pages/inverter-rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

When("clico no botão para inverter a rota traçada", async function () {
    await InverterRotasPage.revertRoutesButtonClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then(
    "os campos de origem e destino traçados estarão invertidos",
    async function () {
        basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
        return "pending";
    }
);
//Scenario 2: Inverter rotas através da pilha de rotas
Given("clico no botão para inverter a rota carregada", async function () {
    await InverterRotasPage.revertRoutesButtonClick();
    basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then(
    "os campos de origem e destino carregados estarão invertidos",
    async function () {
        return "pending";
    }
);
