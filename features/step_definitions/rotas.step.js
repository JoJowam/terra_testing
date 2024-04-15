const { Given, When, Then } = require("cucumber");
const paginaRotas = require("../pages/rotas.pages");
const basic_operations = require("../worlds/basic_operations");

const DELAY_TIME_IN_MILLISECONDS = 2000;

Given("que estou na página inicial", async function () {
    await paginaRotas.openInitialPage();
});

When("clico no menu sanduíche", async function () {
    await paginaRotas.controlHudClick();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

When("clico na aba de rotas", async function () {
    await paginaRotas.menuRoutesClick();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("preencho o endereço de origem com {string}", async function (origin) {
    await paginaRotas.populateOrigin(origin);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("preencho o endereço de destino com {string}", async function (destiny) {
    await paginaRotas.populateDestiny(destiny);
    await paginaRotas.traceRoute();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será traçada no mapa", async function () {
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    //TODO: Implementar verificação de rota traçada no mapa
    return "pending";
});

//Cenário 2: Traçar rota clicando no mapa
Given("clico no botão pin referente ao endereço de origem", async function () {
    await paginaRotas.clickPinButtonOrigin();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico em um ponto no mapa para o endereço de origem", async function () {
    x = 50;
    y = 100;
    await paginaRotas.clickMapPointOrigin(x, y);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico no botão pin referente ao endereço de destino", async function () {
    await paginaRotas.clickPinButtonDestiny();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Given("clico em um ponto para o endereço de destino", async function () {
    x = 40;
    y = 100;
    await paginaRotas.clickMapPointDestiny(x, y);
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será traçada no mapa a partir dos locais clicados", function () {
    //TODO: Implementar verificação de rota traçada no mapa
    return "pending";
});
