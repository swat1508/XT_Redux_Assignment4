import { createHTMLElement } from './domOpeartions';

export const setResponseForAddComment = function (element,w_id,b_id){
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
      <td>Comment Id</td>
      <td>${myArray.id}</td>
      </tr>

      <tr>
      <td>Comment Body</td>
      <td>${myArray.body}</td>
      </tr>
      
      <tr>
      <td>Comment URL</td>
      <td>${myArray.issue_url}</td>
      </tr>              
        
      </table>
  
  </div>
  `);  

return viewRepoData;
}