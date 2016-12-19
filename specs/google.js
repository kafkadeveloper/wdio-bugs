var utils = require("./utils.js")

describe('Google', function() {
    
    before(function(){
        utils.nonExistentFunction()
    });

    afterEach(function() {
        utils.printTestResults();
    });

    it('Loads site and scrolls to bottom', function() {
        browser.url('https://google.com/')
        utils.scrollToBottom()
    });

})