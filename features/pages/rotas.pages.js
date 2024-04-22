const { By } = require("selenium-webdriver");
const { TRACAR_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const driverManager = require("../worlds/driver");

class RotasPages {
    constructor() {
        this.driver = driverManager.getDriver();
    }

    async openInitialPage() {
        await this.driver.get(TRACAR_ROTAS_ELEMENTS.BASE_URL);
    }

    async controlHudClick() {
        await action.elementClickByCss(
            TRACAR_ROTAS_ELEMENTS.BUTTON_CONTROLHUD,
            this.driver
        );
    }

    async menuRoutesClick() {
        await action.elementClickByCss(
            TRACAR_ROTAS_ELEMENTS.BUTTON_MENUROUTES,
            this.driver
        );
    }

    async populateOrigin(origin) {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.INPUT_ORIGIN,
            this.driver
        );

        await action.elementSendKeysById(
            TRACAR_ROTAS_ELEMENTS.INPUT_ORIGIN,
            origin,
            this.driver
        );

        await action.waitForElementLocatedById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            50000,
            this.driver
        );

        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            this.driver
        );
    }

    async populateDestiny(destination) {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.INPUT_DESTINY,
            this.driver
        );

        await action.elementSendKeysById(
            TRACAR_ROTAS_ELEMENTS.INPUT_DESTINY,
            destination,
            this.driver
        );
    }

    async traceRoute() {
        await action.waitForElementLocatedById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            50000,
            this.driver
        );

        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.AUTOCOMPLETE,
            this.driver
        );
    }

    async clickPinButtonOrigin() {
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.BUTTON_REMOVE_ORIGIN,
            this.driver
        );
        await action.elementClickById(
            TRACAR_ROTAS_ELEMENTS.BUTTON_REMOVE_DESTINY,
            this.driver
        );
        await action.delay(2000);

        await action.elementClickByXpath(
            TRACAR_ROTAS_ELEMENTS.BUTTON_PIN_ORIGIN,
            this.driver
        );
    }

    async clickMapPointOrigin(x, y) {
        await action.clickPointInCanvas(
            TRACAR_ROTAS_ELEMENTS.CANVAS,
            x,
            y,
            this.driver
        );
    }

    async clickPinButtonDestiny() {
        await action.elementClickByXpath(
            TRACAR_ROTAS_ELEMENTS.BUTTON_PIN_DESTINY,
            this.driver
        );
    }

    async clickMapPointDestiny(x, y) {
        await action.clickPointInCanvas(
            TRACAR_ROTAS_ELEMENTS.CANVAS,
            x,
            y,
            this.driver
        );
    }

    async inverterRota() {
        await this.driver.findElement(By.id("button-revert-routes")).click();
    }

    async salvarRota() {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await this.driver.findElement(By.css("#button-add-direction")).click();
    }

    async expandirRotas() {
        await this.driver.findElement(By.id("radix-:r4:")).click();
    }

    async limparRota() {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await this.driver
            .findElement(By.css("button.sc-fjvvzt.gBpAAw"))
            .click();
    }
}

module.exports = new RotasPages();
