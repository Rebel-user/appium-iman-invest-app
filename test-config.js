exports.config = {
    runner: 'local',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 10000,
    maxInstances: 10,
    sync: true,
    specs: [
        //'./trainingScript.js'
        './playwithmocha.js'
    ],
    capabilities:[{
            "platformName": "Android",
            "automationName": "UiAutomator2",
            "udid": "d5badcbe0406",
            "appPackage": "udevs.iman_pos",
            "appActivity": ".MainActivity"
    }]
}