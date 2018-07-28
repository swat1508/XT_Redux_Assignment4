import { setResponseForCreateRepo } from './UI_CreateRepo';
import { setResponseForCreateIssue } from './UI_CreateIssue';
import { setResponseForCloseIssue } from './UI_CloseIssue';
import { setResponseForAddComment } from './UI_AddComment';
import { setResponseForAddCollaborator } from './UI_AddCollaborator';
import { setResponseForViewIssues } from './UI_ViewIssues';
import { setResponseForViewLatestComment } from './UI_ViewLatestComment';



export const createHTMLElement = function (html) {   
        debugger;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
      }

        export const setResponseInWidget = function (element) { 
        debugger;
        var operationType=element.type.operationType;
        var myArray=element.data; 
        var widgetId="widget_1";
        var buttonId="button_1";
        var tablearea = document.getElementById('myWidget');
        var statusCode=element.type.resultStatus;     

        if (tablearea.hasChildNodes()) {
            var newChildId = tablearea.childNodes.length + 1;
            widgetId = "widget_" + newChildId;
            buttonId = "button_" + newChildId;
        }

        if (operationType == "create-repo") {
            if (statusCode == 201) {         
                
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForCreateRepo(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(setResponseForCreateRepo(element,widgetId,buttonId),tablearea.childNodes[0]);
                }

            } //201 ends
            else if (statusCode == 422) {
                // var tablearea = document.getElementById('myWidget');
                // var table = document.createElement('table');
                // table.setAttribute("id", "command_result");


                // var tr = document.createElement('tr');
                // var td = document.createElement('td');
                // td.style.border = "1px solid blue";

                // var errorMsg = document.createTextNode("Repo with this name already exists");  //error msg
                // td.appendChild(errorMsg);
                // tr.appendChild(td);

                // table.appendChild(tr);
                // table.style.border = "3px solid black";
                // tablearea.appendChild(table);
            }


        } //create-repo ends

        else if (operationType == "createIssue") {
            if (statusCode == 201) {
                    if(! tablearea.hasChildNodes()){
                        tablearea.appendChild(setResponseForCreateIssue(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(setResponseForCreateIssue(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
            }
        }
        else if (operationType == "closeIssue") {
            if (statusCode == 200) {

                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForCloseIssue(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(setResponseForCloseIssue(element,widgetId,buttonId),tablearea.childNodes[0]);
            }
            }
        }

        if (operationType == "addComment") {
            if (statusCode == 201) {
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForAddComment(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(setResponseForAddComment(element,widgetId,buttonId),tablearea.childNodes[0]);
            }                                               
            }
        }

        

        if (operationType == "addCollaborator") {
            if (statusCode == 201) {
                debugger;                          
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForAddCollaborator(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(setResponseForAddCollaborator(element,widgetId,buttonId),tablearea.childNodes[0]);
            }     
            }
        }

        else if (operationType == "viewIssues") {   //View Issues
            debugger;
            if (statusCode == 200) {
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForViewIssues(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(setResponseForViewIssues(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
            }
        }
        else if (operationType == "getLatestComment") {
            
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(setResponseForViewLatestComment(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(setResponseForViewLatestComment(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
        }
    }

