import { createHTMLElement } from './domOpeartions';

export const setResponseForAddCollaborator = function (element,w_id,b_id){
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
      <td>URL</td>
      <td>${myArray.html_url}</td>
      </tr>

      <tr>
      <td>Inviter </td>
      <td>${myArray.inviter.login}</td>
      </tr>
      
      <tr>
      <td>Invitee</td>
      <td>${myArray.invitee.login}</td>
      </tr>              
        
      </table>
  
  </div>
  `);  

return viewRepoData;
}