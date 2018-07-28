const reducer = require('./../reducer.js');
import actionz from './../actions';
import { globalVaribale } from './../reducer';

export const processFetchApi = function (objData) {
    debugger;
    var statusCode = '';
    var data = {
        method: objData.method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": 'token  c7762a4306c1d081ddee8250e93b72adaa705614'
        }
    }
    if(objData.method !== 'GET') {
        data.body = JSON.stringify(objData.jsonData)
    }
    fetch(objData.url, data).then((response) => {
        statusCode = response.status;
        alert("statusCode : " + statusCode);

        if (response.ok) {
            return response.json();
        }
    }).then((jsonData) => {
        var myArray = jsonData;          //populate data   
        reducer.store.dispatch(
            {
             type :{
                            operationType: objData.operation,
                            resultStatus:statusCode
                             },
             payload: myArray 
            }
        );     
    }).catch((err) => {
        console.log("Error:", err.message);
    })
};