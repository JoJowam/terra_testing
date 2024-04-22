const { LIMPAR_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const driverManager = require("../worlds/driver");

class LimparRotasPages {
    constructor() {
        this.driver = driverManager.getDriver();
    }

    async clearRoutesButtonClick() {
        await action.elementClickByXpath(
            LIMPAR_ROTAS_ELEMENTS.CLEAR_ROUTE_BUTTON,
            this.driver
        );
    }

    //Métodos cenario 2
    async routeStackMenuClick() {
        await action.elementClickByCss(
            LIMPAR_ROTAS_ELEMENTS.ROUTE_STACK_MENU_BUTTON,
            this.driver
        );
    }

    async selectRouteInRouteStack() {
        await action.elementClickById("radix-:r4:", this.driver);
    }
}

module.exports = new LimparRotasPages();
