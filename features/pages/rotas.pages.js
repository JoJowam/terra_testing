const { Builder, By, until } = require("selenium-webdriver");
const { TRACAR_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const chrome = require("selenium-webdriver/chrome");

//TODO: Iniciar esse driver globalmente e utilizar o mesmo em todas as pages
let driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
        new chrome.Options().addArguments(
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage"
        )
    )
    .build();

module.exports = {
    openInitialPage: async function () {
        await driver.get(TRACAR_ROTAS_ELEMENTS.BASE_URL);
    },

    controlHudClick: async function () {
        await action.elementClickByCss(
            TRACAR_ROTAS_ELEMENTS.BUTTON_CONTROLHUD,
            driver
        );
    },

    menuRoutesClick: async function () {
        await action.elementClickByCss(
            TRACAR_ROTAS_ELEMENTS.BUTTON_MENUROUTES,
            driver
        );
    },

    populateOrigin: async function (origin) {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.INPUT_ORIGIN,
            driver
        );

        await action.elementSendKeysById(
            TRACAR_ROTAS_ELEMENTS.INPUT_ORIGIN,
            origin,
            driver
        );

        await action.waitForElementLocatedById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            50000,
            driver
        );

        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            driver
        );
    },

    populateDestiny: async function (destination) {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.INPUT_DESTINY,
            driver
        );

        await action.elementSendKeysById(
            TRACAR_ROTAS_ELEMENTS.INPUT_DESTINY,
            destination,
            driver
        );
    },

    traceRoute: async function () {
        await action.waitForElementLocatedById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            50000,
            driver
        );

        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            driver
        );
    },

    //Cenário 2: Traçar rota clicando no mapa
    clickPinButtonOrigin: async function () {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.BUTTON_REMOVE_ORIGIN,
            driver
        );
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.BUTTON_REMOVE_DESTINY,
            driver
        );
        await action.delay(2000);

        await action.elementClickByXpath(
            TRACAR_ROTAS_ELEMENTS.BUTTON_PIN_ORIGIN,
            driver
        );
    },

    clickMapPointOrigin: async function (x, y) {
        await action.clickPointInCanvas(
            TRACAR_ROTAS_ELEMENTS.CANVAS,
            x,
            y,
            driver
        );
    },

    clickPinButtonDestiny: async function () {
        await action.elementClickByXpath(
            TRACAR_ROTAS_ELEMENTS.BUTTON_PIN_DESTINY,
            driver
        );
    },

    clickMapPointDestiny: async function (x, y) {
        await action.clickPointInCanvas(
            TRACAR_ROTAS_ELEMENTS.CANVAS,
            x,
            y,
            driver
        );
    },

    inverterRota: async function () {
        await driver.findElement(By.id("button-revert-routes")).click();
    },

    salvarRota: async function () {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await driver.findElement(By.css("#button-add-direction")).click();
    },

    expandirRotas: async function () {
        await driver.findElement(By.id("radix-:r4:")).click();
    },

    limparRota: async function () {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await driver.findElement(By.css("button.sc-fjvvzt.gBpAAw")).click();
    },
};
