const { EXCLUIR_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const driverManager = require("../worlds/driver");

class ExcluirRotasPages {
    constructor() {
        this.driver = driverManager.getDriver();
    }

    async deleteRoutesButtonClick() {
        await action.waitForElementLocatedByCss(
            EXCLUIR_ROTAS_ELEMENTS.REMOVE_ROUTE_BUTTON,
            5000,
            this.driver
        );

        await action.elementClickBefore3SecByCss(
            EXCLUIR_ROTAS_ELEMENTS.REMOVE_ROUTE_BUTTON,
            this.driver
        );
    }
}

module.exports = new ExcluirRotasPages();
