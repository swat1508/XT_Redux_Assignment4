import { processFetchApi } from './../services/gitOperations';
   
export const validateDataFromRecast = function (intent, intentData) {
    debugger;
    var tb = intent + "-repoName";
    if (intentData.git_repo) {

        document.getElementById(tb).value = intentData.git_repo[0].value;
    } else {
        document.getElementById(tb).value = "";
    }

    if ((intent == "close-issue") || (intent == "add-collaborator")) {
        var tb = intent + "-target";
        if (intentData.target) {
            document.getElementById(tb).value = intentData.target[0].value;
        } else {
            document.getElementById(tb).value = "";
        }
    }
};

export const displayModal = function (intent, intentData) {
    debugger;
    if (intent == "view-issues") {
        debugger;
        var repoName = intentData.git_repo[0].value;
        let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues?state=all";
        //No Json Required For Get Operation        
        var objData = {};
        objData.url = url;
        objData.method = "GET";
        objData.operation = "viewIssues";
        processFetchApi(objData);
    } else if (intent == "view-latest-comment") {
        debugger;
        var repoName = intentData.git_repo[0].value;
        var issueNumber = intentData.target[0].value;
        let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues/" + issueNumber + "/comments";
        console.log("url", url);
        //No Json Required For Get Operation        
        var objData = {};
        objData.url = url;
        objData.method = "GET";
        objData.operation = "getLatestComment";
        processFetchApi(objData);
    } else {                                                        //Error Check 2
        var triggerElement = document.getElementById('showModal');
        triggerElement.setAttribute('data-target', '#' + intent);           
        validateDataFromRecast(intent, intentData);
        debugger;
        triggerElement.click();
    }       
};