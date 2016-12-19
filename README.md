# wdio-bugs
Sample repo for demonstrating wdio issues for bugreporting

Issues:
1. Errors in before() are not handled gracefully and leaves selenium-standalone running.

```
$ make google
npm install
npm WARN wdio-bugs@1.0.0 No repository field.
./node_modules/.bin/wdio --spec specs/google.js
/Users/shauvik/tmp/wdio-bugs/node_modules/webdriverio/build/lib/utils/ReporterStats.js:448
            testStats.state = 'fail';
                            ^

TypeError: Cannot set property 'state' of undefined
    at ReporterStats.testFail (/Users/shauvik/tmp/wdio-bugs/node_modules/webdriverio/build/lib/utils/ReporterStats.js:448:29)
    at BaseReporter.<anonymous> (/Users/shauvik/tmp/wdio-bugs/node_modules/webdriverio/build/lib/utils/BaseReporter.js:159:25)
    at emitOne (events.js:96:13)
    at BaseReporter.emit (events.js:188:7)
    at BaseReporter.handleEvent (/Users/shauvik/tmp/wdio-bugs/node_modules/webdriverio/build/lib/utils/BaseReporter.js:300:27)
    at Launcher.messageHandler (/Users/shauvik/tmp/wdio-bugs/node_modules/webdriverio/build/lib/launcher.js:609:28)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at process.nextTick (internal/child_process.js:744:12)
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
make: *** [google] Error 1

```

2. waitforTimeout in wdio.conf.js not honored
TBD


3. No spec report printed for some tests
TBD
