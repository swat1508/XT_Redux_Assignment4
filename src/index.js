import './../scss/mystyles.scss';
import './../css/mystyles.css';
import { determineOperation } from './handlerAndcontroller/controller';
import {render, store} from './reducer';
import actionz from './actions';
import {invokeReact } from './services/recastOperations';

     $(document).ready(function () {

    $('#userTextBox').keyup(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
          //  $reCast.invokeReact();
          invokeReact();
        }
    });
/*
$("#create-repo-ok").on('click', function(){
    debugger;
    determineOperation();
});
$("#create-issue-ok").on('click', function(){   
    debugger;
    determineOperation();
});
$("#close-issue-ok").on('click', function(){
    debugger;
    determineOperation();
});
$("#add-comment-ok").on('click', function(){
    debugger;
    determineOperation();
});
$("#add-collaborator-ok").on('click', function(){
    debugger;
    determineOperation();
});
*/

$("button").click(function() {
    var str_classList = this.classList.value;
    var flag = str_classList.includes("modalButton");    
    if(flag){        
        determineOperation();
    }
});


window.onload=(function(){    
     if(!window.localStorage.getItem('currentState')){
        alert("set currentState");
        window.localStorage.setItem('currentState', JSON.stringify([]));                
    }

render();
})();


$('#myWidget').on('click', '.close', function () {
    const $target = $(this).closest('.widget');
    var deleteId = $target.attr('id');
    deleteId=deleteId.substring(deleteId.indexOf('_')+1);
    console.log("deleteId",deleteId);
    var i_deleted = deleteId - 1;
    var stateArray = JSON.parse(window.localStorage.getItem('currentState'));
    stateArray.splice(i_deleted,1);
    console.log(stateArray)
    window.localStorage.setItem('currentState', JSON.stringify(stateArray));
    store.dispatch({type: actionz.action_deleteWidget});
        
})




})

