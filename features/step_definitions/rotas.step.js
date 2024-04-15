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
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
});

Then("a rota será traçada no mapa", async function () {
    await paginaRotas.traceRoute();
    await basic_operations.delay(DELAY_TIME_IN_MILLISECONDS);
    //TODO: Implementar verificação de rota traçada no mapa
});

//Cenário 2: Traçar rota clicando no mapa
// Given("clico no botão pin referente ao endereço de origem", function () {
//     // Write code here that turns the phrase above into concrete actions
//     return "pending";
// });

// Given(
//     "clico em um ponto específico no mapa para o endereço de origem",
//     function () {
//         // Write code here that turns the phrase above into concrete actions
//         return "pending";
//     }
// );

// Given("clico no botão pin referente ao endereço de destino", function () {
//     // Write code here that turns the phrase above into concrete actions
//     return "pending";
// });

// Given(
//     "clico em um ponto específico no mapa para o endereço de destino",
//     function () {
//         // Write code here that turns the phrase above into concrete actions
//         return "pending";
//     }
// );

// Then("a rota será traçada no mapa", function () {
//     // Write code here that turns the phrase above into concrete actions
//     return "pending";
// });
