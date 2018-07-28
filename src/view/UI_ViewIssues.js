import { createHTMLElement } from './domOpeartions';

export const setResponseForViewIssues = function (element,w_id,b_id){
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
            <tr> <td class="tableCellBorder">Issue Number</td>
                 <td class="tableCellBorder">Issue Id</td> 
                 <td class="tableCellBorder">Issue Body</td>
                  <td class="tableCellBorder">Issue Title</td> 
                  <td class="tableCellBorder">Issue State</td> 
            </tr>
    
            ${myArray.map(issue =>
                `<tr> <td class="tableCellBorder"> ${issue.number} </td>
                      <td class="tableCellBorder"> ${issue.id} </td>
                      <td class="tableCellBorder"> ${issue.body} </td>
                      <td class="tableCellBorder"> ${issue.title} </td>
                      <td class="tableCellBorder"> ${issue.state} </td>
                </tr>`                 
                   ).join('')}
    
            </table>
        
        </div>
        `);  
    
     return viewRepoData;
    };