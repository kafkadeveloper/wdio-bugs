var utils = require("./utils.js")

describe('WPEngine.com', function() {

    afterEach(function() {
        utils.printTestResults();
    });

    it('Loads site and scrolls to botton', function() {
        browser.url('https://wpengine.com/')
        utils.scrollToBottom()
    });
});