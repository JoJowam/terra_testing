const TRACAR_ROTAS_ELEMENTS = {
    BASE_URL: "https://terraplanner.org/",
    BUTTON_CONTROLHUD: '[data-testid="button-controlhud"]',
    BUTTON_MENUROUTES: '[data-testid="button-menu-routes"]',
    INPUT_ORIGIN: "input-field-origin",
    AUTOCOMPLETE: "search-result-0-autocomplete",
    INPUT_DESTINY: "input-field-destiny",
    BUTTON_PIN_ORIGIN:
        "//input[@id='input-field-origin']/following-sibling::button",
    BUTTON_PIN_DESTINY:
        "//input[@id='input-field-destiny']/following-sibling::button",
    BUTTON_REMOVE_ORIGIN: "button-remove-input-field-origin",
    BUTTON_REMOVE_DESTINY: "button-remove-input-field-destiny",
    CANVAS: "canvas",
};

const SALVAR_ROTAS_ELEMENTS = {
    BUTTON_ADDROUTES: "button-add-direction",
};

const LIMPAR_ROTAS_ELEMENTS = {
    CLEAR_ROUTE_BUTTON: "//button[@id='button-clear-routes'][2]",
    ROUTE_STACK_MENU_BUTTON: "#radix-\\3Ar4\\3A > svg",
    ROUTE_IN_ROUTE_STACK_BUTTON:
        "div.sc-fXSgeo.fLmnEI:contains('Ouro Preto > Mariana')",
};

const INVERTER_ROTAS_ELEMENTS = {
    INVERT_ROUTE_BUTTON: "button-revert-routes",
};

module.exports = {
    TRACAR_ROTAS_ELEMENTS,
    SALVAR_ROTAS_ELEMENTS,
    LIMPAR_ROTAS_ELEMENTS,
    INVERTER_ROTAS_ELEMENTS,
};
