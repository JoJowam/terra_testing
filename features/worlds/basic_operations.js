const { Builder, By, until } = require("selenium-webdriver");

module.exports = {
    elementClickByCss: async function (element, driver) {
        try {
            await driver.findElement(By.css(element)).click();
        } catch (error) {
            console.error(
                `Falha ao clicar no elemento com seletor CSS ${element}:`,
                error
            );
            throw error;
        }
    },

    elementClickById: async function (element, driver) {
        try {
            await driver.findElement(By.id(element)).click();
        } catch (error) {
            console.error(
                `Falha ao clicar no elemento com ID ${element}:`,
                error
            );
            throw error;
        }
    },

    elementClickByXpath: async function (element, driver) {
        try {
            await driver.findElement(By.xpath(element)).click();
        } catch (error) {
            console.error(
                `Falha ao clicar no elemento com XPath ${element}:`,
                error
            );
            throw error;
        }
    },

    elementSendKeysById: async function (element, keys, driver) {
        try {
            await driver.findElement(By.id(element)).sendKeys(keys);
        } catch (error) {
            console.error(
                `Falha ao enviar teclas para o elemento com ID: ${element}:`,
                error
            );
            throw error;
        }
    },

    waitForElementLocatedById: async function (elementId, timeout, driver) {
        try {
            await driver.wait(until.elementLocated(By.id(elementId)), timeout);
        } catch (error) {
            console.error(
                `Falha ao localizar o elemento com ID ${elementId} dentro do tempo limite de ${timeout} ms:`,
                error
            );
            throw error;
        }
    },

    delay: async function (timeout) {
        try {
            await new Promise((resolve) => setTimeout(resolve, timeout));
        } catch (error) {
            console.error(`Falha ao aguardar ${timeout} ms:`, error);
            throw error;
        }
    },
};
