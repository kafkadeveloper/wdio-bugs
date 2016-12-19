var utils = require("./utils.js")

describe('FruitShoppe', function() {

    afterEach(function() {
        utils.printTestResults();
    });

    it('Loads site and scrolls to botton', function() {
        browser.url('https://fruitshoppe.firebaseapp.com/')
        utils.scrollToBottom()
    });
});