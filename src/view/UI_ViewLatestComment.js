import { createHTMLElement } from './domOpeartions';

export const setResponseForViewLatestComment = function (element,w_id,b_id){
    var command = element.type.command;
    var myArray=element.data;


    myArray.forEach(function (element) {
        var utcDate = element.updated_at;
        var localDate = new Date(utcDate);
        console.log(localDate);
    });

    var lastComment = [];
    lastComment = myArray[0];
    for (var i = 1; i < myArray.length; i++) {
        if (myArray[i].updated_at > lastComment.updated_at) {
            lastComment = myArray[i];
        }
    }
    console.log("Last Updated Comment : ", lastComment.body);

    var lastUpdatedInUTCFormat = lastComment.updated_at;
    var lastUpdatedInISTFormat = new Date(lastUpdatedInUTCFormat);
    const viewRepoData = createHTMLElement(`
    <div id='${w_id}' class="widget">    
        <h5 class="card-title">Response For Command: ${command} 
        <button type="button" class="close" aria-label="Close" id="${b_id}">
        <span aria-hidden="true">&times;</span>
      </button>
        </h5>
        

        <table class="table table-bordered table-striped table-hover">
        <tr>
        <td>Comment Id</td>
        <td>${lastComment.id}</td>
        </tr>

        <tr>
        <td>Comment Body </td>
        <td>${lastComment.body}</td>
        </tr>
        
        <tr>
        <td>URL</td>
        <td>${lastComment.html_url}</td>
        </tr>  
        
        <tr>
        <td>Last Updated At</td>
        <td>${lastUpdatedInISTFormat}</td>
        </tr> 
          
        </table>
    
    </div>
    `);    
 return viewRepoData;
};