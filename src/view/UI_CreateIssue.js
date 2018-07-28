import { createHTMLElement } from './domOpeartions';

export const setResponseForCreateIssue = function (element,w_id,b_id){
    var command = element.type.command;
    var myArray=element.data;
  const viewRepoData = createHTMLElement(`
  <div id='${w_id}' class="widget">    
      <h5 class="card-title">Response For Command: ${command} 
      <button type="button" class="close" aria-label="Close" id="${b_id}">
      <span aria-hidden="true">&times;</span>
    </button>
      </h5>
      

      <table class="table table-bordered table-striped table-hover">
      <tr>
      <td>Issue Title</td>
      <td>${myArray.title}</td>
      </tr>
      
      <tr>
      <td>Issue Body</td>
      <td>${myArray.body}</td>
      </tr>
      
      <tr>
      <td>Issue URL</td>
      <td>${myArray.url}</td>
      </tr>
      
      <tr>
      <td>Assignee Login</td>
      <td>${myArray.assignee.login}</td>
      </tr>
        
      </table>
  
  </div>
  `);  

return viewRepoData;
}