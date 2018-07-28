// const DomOperations = require('./view/domOpeartions.js');
// const _domOp = new DomOperations();
import { updateState } from './handlerAndcontroller/stateUpdater';
import { setResponseInWidget } from './view/domOpeartions';
export const store = Redux.createStore(findReducer, [])
export function findReducer(currentState = [], action) {
    switch (action.type.operationType) {
        case 'createIssue':
        case 'create-repo':
        case 'viewIssues':
        case 'closeIssue':
        case 'addComment':
        case 'addCollaborator':
        case 'getLatestComment': {
            debugger;
            var nextState = updateState(currentState, action);
            debugger;
            window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;
            break;
        }
        default:
            return currentState;
    }
}
store.subscribe(render);
//export const render = function() {
    export function render(){
    document.getElementById("myWidget").innerHTML = '';
    debugger;
    var repository = JSON.parse(window.localStorage.getItem('currentState'));
    if (repository) {
        repository.forEach(function (element) {
            debugger;
            setResponseInWidget(element);
        });
    }
}

