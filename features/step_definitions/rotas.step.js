const { Given, When, Then } = require("cucumber");
const RotasPages = require("../pages/rotas.pages"); // Alteração do nome da variável para corresponder à classe
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

Given("que estou na página inicial", async function () {
    await RotasPages.openInitialPage();
});

When("clico no menu sanduíche", async function () {
    await RotasPages.controlHudClick();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

When("clico na aba de rotas", async function () {
    await RotasPages.menuRoutesClick();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("preencho o endereço de origem com {string}", async function (origin) {
    await RotasPages.populateOrigin(origin);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("preencho o endereço de destino com {string}", async function (destiny) {
    await RotasPages.populateDestiny(destiny);
    await RotasPages.traceRoute();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será traçada no mapa", async function () {
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    //TODO: Implementar verificação de rota traçada no mapa
    return "pending";
});

//Cenário 2: Traçar rota clicando no mapa
Given("clico no botão pin referente ao endereço de origem", async function () {
    await RotasPages.clickPinButtonOrigin();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico em um ponto no mapa para o endereço de origem", async function () {
    x = 50;
    y = 100;
    await RotasPages.clickMapPointOrigin(x, y);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico no botão pin referente ao endereço de destino", async function () {
    await RotasPages.clickPinButtonDestiny();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico em um ponto para o endereço de destino", async function () {
    x = 40;
    y = 100;
    await RotasPages.clickMapPointDestiny(x, y);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será traçada no mapa a partir dos locais clicados", function () {
    //TODO: Implementar verificação de rota traçada no mapa
    return "pending";
});
