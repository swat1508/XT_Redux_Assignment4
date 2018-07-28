import { createRepoService } from './../services/createRepo_service';
import { createIssueService } from './../services/createIssue_service';
import { closeIssueService } from './../services/closeIssue_service';
import { addCommentService } from './../services/addComment_service';
import { addCollaboratorService } from './../services/addCollaborator_service';

import { processFetchApi } from './../services/gitOperations';

export const determineOperation = function () {
    var intent = document.getElementById("hiddenFieldIntent").value;
    var closeButtonId = intent + "-close";
    debugger;

    if (intent == "create-repo") {
        document.getElementById(closeButtonId).click();
        processFetchApi(createRepoService());
    } else if (intent == "create-issue") {
        document.getElementById(closeButtonId).click();
        processFetchApi(createIssueService());
    } else if (intent == "close-issue") {
        document.getElementById(closeButtonId).click();
        processFetchApi(closeIssueService());
    } else if (intent == "add-comment") {
        document.getElementById(closeButtonId).click();
        processFetchApi(addCommentService());
    } else if (intent == "add-collaborator") {
        document.getElementById(closeButtonId).click();
        processFetchApi(addCollaboratorService());
    }

};







