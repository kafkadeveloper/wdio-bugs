var http = require('http')

module.exports = {
    scrollToBottom: function () {
        browser.pause(1000) // wait for 1 second for browser to render page
        var heights = browser.execute(function(){
            return document.body.scrollHeight;
        });
        //console.log("Height=", heights.value)
        for(var h = 0; h < heights.value; h = h + 100) {
            //console.log("Scrolling ", h)
            browser.scroll(0, h);
        }
        browser.pause(1000) // wait
        browser.saveScreenshot('./snapshot.png')
    },
    printTestResults: function() {
        var url = browser.execute(function() {
            return window.location.protocol + "//" + window.location.host + "/" + window.location.pathname+window.location.search+window.location.hash;
        })
        console.log('URL:', url.value)
        var logs = browser.log('browser')
        if(logs.value.length != 0 ) {
            console.log('ERROR LOGS:')
            logs.value.forEach(function(log) {
                console.log('*', log.level, log.message)
            })
            throw new Error("Fail: Error logs in browser");
        }
    }
}