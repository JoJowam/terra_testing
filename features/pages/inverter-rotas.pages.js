const { INVERTER_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const driverManager = require("../worlds/driver");

class LimparRotasPages {
    constructor() {
        this.driver = driverManager.getDriver();
    }

    async revertRoutesButtonClick() {
        await action.elementClickById(
            INVERTER_ROTAS_ELEMENTS.INVERT_ROUTE_BUTTON,
            this.driver
        );
    }
}

module.exports = new LimparRotasPages();
