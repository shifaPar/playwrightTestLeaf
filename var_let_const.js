const browserVersion = 'Chrome'

function getBrowserVersion(browserVersion){
    if (browserVersion == 'Chrome'){
        var browserVersion = 'firefox'
        console.log("Browser version is: " + browserVersion)
    }
    else {
        console.log("Browser version is other than chrome")
    }
}

getBrowserVersion("Chrome")