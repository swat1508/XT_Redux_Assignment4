import { createHTMLElement } from './domOpeartions';

export const setResponseForCreateRepo = function (element,w_id,b_id){
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
      <td>Repo Name</td>
      <td>${myArray.name}</td>
      </tr>
      
      <tr>
      <td>Repo Desc</td>
      <td>${myArray.description}</td>
      </tr>
      
      <tr>
      <td>Repo Id</td>
      <td>${myArray.id}</td>
      </tr>
      
      <tr>
      <tdRepo Clone Url</td>
      <td${myArray.clone_url}</td>
      </tr>

      <tr>
      <td>Repo Owner Id</td>
      <td>Login</td>
      </tr>
        
      </table>
  
  </div>
  `);  

return viewRepoData;
}