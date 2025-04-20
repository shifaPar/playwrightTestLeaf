
function launchBrowser(browserName){
    if (browserName=="Chrome"){
        console.log("Browser is Chrome")
    }
    else if (browserName=="edge"){
        console.log("Browser is Microsoft edge")
    }
    else {
        console.log("Browser is other than Edge and Chrome")
    }
}
function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Testing type is Smoke testing")
            break;
        case "sanity":
            console.log("Testing type is Sanity testing")
            break;
        case "regression":
            console.log("Testing type is Regression testing")
            break;
        default:
            console.log("Testing type is Smoke testing as a default")
    }
}

launchBrowser("edge")
runTests("regression")
