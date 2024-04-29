const { By, until } = require("selenium-webdriver");

module.exports = {
    elementClickByCss: async function (element, driver) {
        //TODO: Implementar um modo de esperar por um tempo antes de clicar no botão
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

    elementClickBefore2SecByCss: async function (element, driver) {
        //TODO: Excluir método após implementar o método de espera na base
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
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

    elementClickByLinkText: async function (linkText, driver) {
        try {
            await driver.findElement(By.linkText(linkText)).click();
        } catch (error) {
            console.error(
                `Falha ao clicar no elemento com o link text: "${linkText}":`,
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

    waitForElementLocatedByCss: async function (elementCss, timeout, driver) {
        try {
            await driver.wait(
                until.elementLocated(By.css(elementCss)),
                timeout
            );
        } catch (error) {
            console.error(
                `Falha ao localizar o elemento com CSS ${elementCss} dentro do tempo limite de ${timeout} ms.`,
                error
            );
            throw error;
        }
    },

    clickPointInCanvas: async function (canvasCssSelector, x, y, driver) {
        try {
            const canvas = await driver.findElement(By.css(canvasCssSelector));

            await driver
                .actions()
                .move({ origin: canvas, x: x, y: y })
                .click()
                .perform();
        } catch (error) {
            console.error(
                `Falha ao clicar no ponto (${x}, ${y}) no elemento canvas com seletor CSS ${canvasCssSelector}:`,
                error
            );
            throw error;
        }
    },

    clickElementContainingText: async function (selector, text, driver) {
        const elements = await driver.findElements(By.css(selector));
        for (const element of elements) {
            const elementText = await element.getText();
            if (elementText.includes(text)) {
                await element.click();
                return;
            }
        }
        console.error(`Element with text '${text}' not found`);
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
