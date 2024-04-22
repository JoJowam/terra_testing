const { By } = require("selenium-webdriver");
const { SALVAR_ROTAS_ELEMENTS } = require("../worlds/elements");
const action = require("../worlds/basic_operations");
const driverManager = require("../worlds/driver");

class SalvarRotasPages {
    constructor() {
        this.driver = driverManager.getDriver();
    }

    async addRoutesClick() {
        await action.elementClickById(
            SALVAR_ROTAS_ELEMENTS.BUTTON_ADDROUTES,
            this.driver
        );
    }
}

module.exports = new SalvarRotasPages();
