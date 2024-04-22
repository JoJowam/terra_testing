const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

class WebDriverManager {
    constructor() {
        if (!WebDriverManager.instance) {
            this.driver = this.createDriver();
            WebDriverManager.instance = this;
        }

        return WebDriverManager.instance;
    }

    createDriver() {
        const chromeOptions = new chrome.Options().addArguments(
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage"
        );

        return new Builder()
            .forBrowser("chrome")
            .setChromeOptions(chromeOptions)
            .build();
    }

    getDriver() {
        return this.driver;
    }

    quitDriver() {
        if (this.driver) {
            this.driver.quit();
            this.driver = null;
        }
    }
}

module.exports = new WebDriverManager();
